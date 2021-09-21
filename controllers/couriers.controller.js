const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Courier = require("../models/Courier.model");

module.exports.courierControllers = {
  registerCourier: async (req, res) => {
    try {
        const { name, login, password } = req.body;

        const hash = await bcrypt.hash(password, Number(process.env.SALT));

        const courier = await Courier.create({ name, login, password: hash });

        res.json(courier);
    }catch (e) {
        res.json(e.toString())
    }
  },
  // eslint-disable-next-line consistent-return
  login: async (req, res) => {
    try {
        const { login, password } = req.body;

        const candidate = await Courier.findOne({ login });

        if (!candidate) {
            return res.status(401).json("неверный логин");
        }

        const valid = await bcrypt.compare(password, candidate.password);

        if (!valid) {
            return res.status(401).json("неверный пароль");
        }

        const payload = {
            // eslint-disable-next-line no-underscore-dangle
            id:candidate._id,
            login:candidate.login
        }
        const token = await jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: "7d"
        })

        res.json({
            token
        })

    }catch (e) {
        console.log("Ошибка в контроллере LOGIN")
    }
  },
  getCourier: async (req, res) => {
    const courier = await Courier.find();
    res.json(courier);
  },
};
