import { Request, Response, NextFunction } from 'express'
import interactors from '../core/interactors'

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await interactors.GetProductsInteractor()
  if (!products.success) {
    return next(products.err)
  }
  res.status(200).json({ state: 'success', data: products })
}

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await interactors.CreateProductInteractor(req.body)
  if (!product.success) {
    return next(product.err)
  }
  res.status(200).json({ state: 'success', data: product })
}

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateProduct = await interactors.UpdateProductInteractor(req.body)
  if (!updateProduct.success) {
    return next(updateProduct.err)
  }
  res.status(200).json({ state: 'success', data: updateProduct })
}

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const deleteProduct = await interactors.DeleteProductInteractor(req.body.id)
  if (!deleteProduct.success) {
    return next(deleteProduct.err)
  }
  res.status(200).json({ state: 'success', data: deleteProduct })
}

export const getProductsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const getProductsById = await interactors.GetProductsByIdInteractor(
    req.body.id
  )
  if (!getProductsById.success) {
    return next(getProductsById.err)
  }
  res.status(200).json({ state: 'success', data: getProductsById })
}
