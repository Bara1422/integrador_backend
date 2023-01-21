import { NextFunction, Request, Response } from "express";
import { nextTick } from "process";
import interactors from "../core/interactors";

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categories = await interactors.GetCategoryInteractor();

  res.status(200).json({ state: "success", data: categories });
};

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  const category = await interactors.CreateCategoryInteractor(categoryName);

  res.status(200).json({ state: "success", data: category });
};
