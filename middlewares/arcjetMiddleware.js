const arcjetMiddleware = async (req, res, next) => {
  const { default: arcjet, detectBot, tokenBucket } = await import('@arcjet/node');

  const aj = arcjet({
    key: process.env.ARCJET_KEY,
    rules: [
      detectBot({ mode: 'LIVE', allow: [] }),
      tokenBucket({ mode: 'LIVE', refillRate: 5, interval: 10, capacity: 10 }),
    ],
  });

  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  next();
};

module.exports = arcjetMiddleware;
