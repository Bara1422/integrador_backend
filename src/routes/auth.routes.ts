import { Router } from "express";
import { signin, login } from "../controllers/auth.controller";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = Router();

router.post(
  "/signin",
  body("email").isEmail().withMessage("Error en Email"),
  body("name").trim().notEmpty().withMessage("Nombre obligatorio"),
  body("password").trim().notEmpty().withMessage("Password obligatorio"),
  validateRequest,
  signin
);
router.post(
  "/login",
  body("email").isEmail().withMessage("Error en Email"),
  body("password").trim().notEmpty().withMessage("Password obligatorio"),
  validateRequest,
  login
);

export default router;
