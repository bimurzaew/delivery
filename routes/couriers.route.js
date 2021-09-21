const {Router} = require("express");
const {courierControllers} = require("../controllers/couriers.controller");

const route = Router();

route.get("/couriers", courierControllers.getCourier)
route.post("/couriers", courierControllers.registerCourier);
route.post("/couriers/login", courierControllers.login);

module.exports = route;