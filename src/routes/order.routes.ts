import { Router } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

import { createOrder } from "../controllers/order.controller";

import { protect } from "../middlewares/auth";

const router = Router();

router.post(
  "/",
  body("userId").notEmpty().withMessage("Nombre obligatorio"),
  body("shippingDetails").isObject().notEmpty(),
  body("items").isArray().notEmpty(),
  body("shippingPrice").isNumeric().notEmpty(),
  body("subtotal").isNumeric().notEmpty(),
  body("total").isNumeric().notEmpty(),
  validateRequest,
  protect,
  createOrder
);

export default router;
