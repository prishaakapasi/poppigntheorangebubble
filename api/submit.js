/* POST /api/submit — saves an "Add what you know" submission for review.
   Nothing is shown on the site until someone approves it in admin.html. */
const { redis, cors, send, body, clean, rateLimit, SLUG, crypto } = require('./_lib');

const TYPES = ['eating', 'club', 'class'];
const CONNECTIONS = ['member', 'former', 'applied', 'friends', 'outside', 'took', 'taking'];

module.exports = async (req, res) => {
  if (cors(req, res, 'POST')) return;
  if (req.method !== 'POST') return send(res, 405, { error: 'Use POST' });
  const b = body(req);

  // Hidden field real people never fill in. Bots do; pretend it worked.
  if (clean(b.website, 100)) return send(res, 200, { ok: true });

  const type = clean(b.type, 10);
  const target = clean(b.target, 60).toLowerCase();
  const targetName = clean(b.targetName, 80);
  const connection = clean(b.connection, 12);
  const classYear = clean(b.classYear, 4);
  if (!TYPES.includes(type) || !SLUG.test(target) || !targetName || !CONNECTIONS.includes(connection)) {
    return send(res, 400, { error: 'Some required answers are missing.' });
  }
  if (classYear && !/^20[2-3]\d$/.test(classYear)) return send(res, 400, { error: 'Class year should look like 2028.' });

  const answers = (Array.isArray(b.answers) ? b.answers : []).slice(0, 8).map((a) => ({
    id: clean(a && a.id, 40),
    label: clean(a && a.label, 80),
    kind: a && a.kind === 'fact' ? 'fact' : 'take',
    a: clean(a && a.a, 600)
  })).filter((a) => a.id && a.a.length >= 10);
  if (!answers.length) return send(res, 400, { error: 'Answer at least one question (a sentence or two).' });

  if (!(await rateLimit('submit', req, 5, 3600))) return send(res, 429, { error: 'That’s a lot of submissions. Try again in an hour.' });

  const id = crypto.randomBytes(8).toString('hex');
  const sub = { id, type, target, targetName, connection, classYear, answers, status: 'pending', createdAt: new Date().toISOString() };
  try {
    await redis('SET', 'sub:' + id, JSON.stringify(sub));
    await redis('LPUSH', 'pending', id);
  } catch (e) {
    return send(res, e.code === 'no_db' ? 503 : 500, { error: 'We couldn’t save that right now. Your answers are still on this page, so try again in a minute.' });
  }
  send(res, 200, { ok: true });
};
