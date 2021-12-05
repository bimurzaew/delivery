const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Order = require("../models/Order.model");

module.exports.usersController = {
  register: async (req, res) => {
    try {
      const { login, password, name, email, lastName, role } = req.body;
      const hash = await bcrypt.hash(password, Number(process.env.SALT));

      if (!lastName) {
        return res.json({ error: "необходимо ввести фамилию" });
      }
      if (!name) {
        return res.json({ error: "необходимо ввести имя" });
      }
      if (!email) {
        return res.json({ error: "необходимо ввести почту" });
      }
      if (!role) {
        return res.json({ error: "в чем заключается суть вашей жизни?" });
      }
      if (!login) {
        return res.json({ error: "необходимо ввести логин" });
      }
      if (!password) {
        return res.json({ error: "необходимо ввести пароль" });
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
        lastName,
        role,
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
        id: candidate._id,
        role: candidate.role,
      };

      const token = jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: "24h",
      });
      res.json({ token, payload });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.json(e.toString());
    }
  },
  addOrderToUser: async (req, res) => {
    try {
      const data = await Order.findByIdAndUpdate(req.params.id, {
        courier: req.user.id,
      });

      return res.json(data);
    } catch (e) {
      return res.json(e.toString());
    }
  },
};
