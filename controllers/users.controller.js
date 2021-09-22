const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

module.exports.usersController = {
  register: async (req, res) => {
    try {
      const { login, password, name, email, lastName } = req.body;
      const hash = await bcrypt.hash(password, Number(process.env.SALT));

      if (!login) {
        return res.json({ error: "необходимо ввести логин" });
      }
      if (!password) {
        return res.json({ error: "необходимо ввести пароль" });
      }
      if (!email) {
        return res.json({ error: "необходимо ввести почту" });
      }
      if (!name) {
        return res.json({ error: "необходимо ввести имя" });
      }

      const log = await User.findOne({ login });
      if (log) {
        return res.json({ error: "такой логин занят" });
      }
      await User.create({
        login,
        password: hash,
        email,
        name,
        lastName
      });

      res.json("success");
    } catch (e) {
      res.json(e.toString());
    }
  },
  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });

      if (login.length === 0) {
        res.status(401).json({ error: "необходимо ввести логин" });
      }
      if (password.length === 0) {
        res.status(401).json({ error: "необходимо ввести пароль" });
      }

      if (!candidate) {
        res.status(401).json({ error: "неверный логин" });
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        res.status(401).json({ error: "неверный пароль" });
      }

      const payload = {
        id: candidate.id,
      };

      const token = jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: "24h",
      });

      res.json({ token });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
};
