const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Vendor = require("../models/Vendor.model");

module.exports.vendorsController = {
  registerVendor: async (req, res) => {
    try {
      const { login, password, storeName, email } = req.body;
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
      if (!storeName) {
        return res.json({ error: "необходимо ввести пароль" });
      }

      const log = await Vendor.findOne({ login });
      if (log) {
        return res.json({ error: "такой логин занят" });
      }
      await Vendor.create({
        login,
        password: hash,
        email,
        storeName,
      });

      res.json("success");
    } catch (e) {
      res.json(e.toString());
    }
  },
  vendorAuth: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await Vendor.findOne({ login });

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
        role: "Vendor",
      };

      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });

      res.json(token);
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },

};
