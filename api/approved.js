/* GET /api/approved?target=<id> — approved submissions for one club, eating club or class. */
const { redis, cors, send, clean, getMany, SLUG } = require('./_lib');

module.exports = async (req, res) => {
  if (cors(req, res, 'GET')) return;
  if (req.method !== 'GET') return send(res, 405, { error: 'Use GET' });
  const target = clean((req.query && req.query.target) || new URL(req.url, 'http://x').searchParams.get('target'), 60).toLowerCase();
  if (!SLUG.test(target)) return send(res, 400, { error: 'Unknown page.' });
  try {
    const ids = await redis('LRANGE', 'approved:' + target, 0, 19);
    const items = (await getMany(ids)).map((s) => ({
      connection: s.connection, classYear: s.classYear, answers: s.answers, reviewedAt: s.reviewedAt
    }));
    send(res, 200, { items });
  } catch (e) {
    send(res, 200, { items: [] });
  }
};
