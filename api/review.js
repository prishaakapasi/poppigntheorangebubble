/* /api/review — for the team only (needs the ADMIN_KEY).
   GET: pending submissions and questions Ask Pop couldn't answer.
   POST { id, action: "approve" | "reject" }: publish or delete a submission. */
const { redis, cors, send, body, clean, isAdmin, getMany } = require('./_lib');

module.exports = async (req, res) => {
  if (cors(req, res, 'GET, POST')) return;
  if (!isAdmin(req)) return send(res, 401, { error: 'Wrong or missing review key.' });
  try {
    if (req.method === 'GET') {
      const pending = await getMany(await redis('LRANGE', 'pending', 0, 49));
      const questions = (await redis('LRANGE', 'questions', 0, 49)).map((q) => { try { return JSON.parse(q); } catch (e) { return null; } }).filter(Boolean);
      return send(res, 200, { pending, questions });
    }
    if (req.method === 'POST') {
      const b = body(req);
      const id = clean(b.id, 32);
      if (!/^[a-f0-9]{16}$/.test(id) || !['approve', 'reject'].includes(b.action)) return send(res, 400, { error: 'Bad request.' });
      const raw = await redis('GET', 'sub:' + id);
      if (!raw) return send(res, 404, { error: 'That submission no longer exists.' });
      const sub = JSON.parse(raw);
      await redis('LREM', 'pending', 0, id);
      if (b.action === 'approve') {
        sub.status = 'approved';
        sub.reviewedAt = new Date().toISOString();
        await redis('SET', 'sub:' + id, JSON.stringify(sub));
        await redis('LPUSH', 'approved:' + sub.target, id);
        await redis('LPUSH', 'approved:all', id);
      } else {
        await redis('DEL', 'sub:' + id);
      }
      return send(res, 200, { ok: true });
    }
    send(res, 405, { error: 'Use GET or POST' });
  } catch (e) {
    send(res, e.code === 'no_db' ? 503 : 500, { error: e.code === 'no_db' ? 'The database isn’t connected yet. See the README.' : 'Something went wrong.' });
  }
};
