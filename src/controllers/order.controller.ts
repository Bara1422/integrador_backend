import { Request, Response, NextFunction } from 'express'

import interactors from '../core/interactors'

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const order = await interactors.CreateOrderInteractor(req.body)

  if (!order.success) {
    return next(order.err)
  }

  res.header('Access-Control-Allow-Origin', '*')
  res.status(200).json({ state: 'success', data: order })
}

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orders = await interactors.GetOrderInteractor()

  if (!orders.success) {
    return next(orders.err)
  }

  res.status(200).json({ state: 'success', data: orders })
}

export const getOrdersByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ordersByUserId = await interactors.GetOrderByUserIdInteractor(
    req.body.userId
  )
  if (!ordersByUserId.success) {
    return next(ordersByUserId.err)
  }

  res.status(200).json({ state: 'success', data: ordersByUserId })
}
/* 
export const getOrderItemsByOrderId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orderItemsByOrderId = await interactors.GetOrderItemsByOrderId(req.body)
  if (!orderItemsByOrderId.success) {
    return next(orderItemsByOrderId.err)
  }
  res.status(200).json({ state: 'success', data: orderItemsByOrderId })
} */
