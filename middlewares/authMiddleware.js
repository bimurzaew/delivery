const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "ошибка авторизации" });
  }

  const [type, token] = authorization.split(" ");
  if (type !== "Bearer") {
    res.status(401).json({ error: "неверный тип токена" });
  }
  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT);

    next();
  } catch (e) {
    res.status(401).json(e.toString());
  }
};
