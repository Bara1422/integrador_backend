import { Request, Response, NextFunction } from "express";
import interactors from "../core/interactors";
import { validationResult } from "express-validator/src/validation-result";
import { RequestValidationError } from "../errors/request-validation-error";
import { NotFoundError } from "../errors/not-found-error";

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, roleId } = req.body;
  const signinResponse = await interactors.SigninAuthInteractor({
    name,
    email,
    password,
    roleId: Number(roleId),
  });

  if (!signinResponse.success) {
    return next(signinResponse.err);
  }

  res.status(200).json({ message: "success", ...signinResponse });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const loginResponse = await interactors.LoginAuthInteractor({
    email,
    password,
  });

  if (!loginResponse.success) {
    return next(loginResponse.err);
  }

  res.status(200).json({ message: "success", ...loginResponse });
};
