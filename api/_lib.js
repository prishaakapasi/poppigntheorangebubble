/* Shared helpers for the API routes. Files starting with "_" are not exposed as routes.
   Storage is Upstash Redis over its REST API (no npm packages needed). */
const crypto = require('crypto');

const ALLOWED_ORIGINS = [
  'https://poppigntheorangebubble.vercel.app',
  'https://prishaakapasi.github.io'
];

async function redis(...cmd) {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) { const e = new Error('Database is not connected'); e.code = 'no_db'; throw e; }
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd)
  });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}

// Sets CORS headers. Returns true if the request was a preflight and is finished.
function cors(req, res, methods) {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin) || /^http:\/\/localhost(:\d+)?$/.test(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', methods + ', OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-key');
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return true; }
  return false;
}

function send(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

function body(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; }
}

function clean(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '').trim().slice(0, max);
}

function ip(req) {
  return String(req.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
}

// At most `max` requests per `windowSec` from one address. Allows the request if the DB is down.
async function rateLimit(name, req, max, windowSec) {
  try {
    const key = 'rl:' + name + ':' + crypto.createHash('sha256').update(ip(req)).digest('hex').slice(0, 16);
    const n = await redis('INCR', key);
    if (n === 1) await redis('EXPIRE', key, windowSec);
    return n <= max;
  } catch (e) { return true; }
}

function isAdmin(req) {
  const want = process.env.ADMIN_KEY || '';
  const got = String(req.headers['x-admin-key'] || '');
  if (want.length < 8 || got.length !== want.length) return false;
  return crypto.timingSafeEqual(Buffer.from(got), Buffer.from(want));
}

async function getMany(ids) {
  if (!ids || !ids.length) return [];
  const raw = await redis('MGET', ...ids.map((id) => 'sub:' + id));
  return raw.filter(Boolean).map((s) => { try { return JSON.parse(s); } catch (e) { return null; } }).filter(Boolean);
}

const SLUG = /^[a-z0-9-]{1,60}$/;

module.exports = { redis, cors, send, body, clean, rateLimit, isAdmin, getMany, SLUG, crypto };
