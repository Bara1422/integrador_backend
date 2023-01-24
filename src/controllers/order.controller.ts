import { Request, Response, NextFunction } from "express";

import interactors from "../core/interactors";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const order = await interactors.CreateOrderInteractor(req.body);

  if (!order.success) {
    return next(order.err);
  }

  res.status(200).json({ state: "success", data: order });
};
