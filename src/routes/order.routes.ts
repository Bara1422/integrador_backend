import { Router } from 'express'
import { body } from 'express-validator'
import { validateRequest } from '../middlewares/validate-request'

import {
  createOrder,
  getOrder,
  getOrdersByUserId,
} from '../controllers/order.controller'

import { authorized, protect } from '../middlewares/auth'
import { prisma } from '../config/db'

const router = Router()

router.get('/:orderId/order-items', async (req, res) => {
  const orderId = Number(req.params.orderId)
  const orderItems = await prisma.orderItems.findMany({
    where: {
      order: {
        id: orderId,
      },
    },
  })
  res.json(orderItems)
})
router.get('/', validateRequest, protect, getOrder)
//router.get('/:id', validateRequest, protect, getOrdersByUserId)
router.post(
  '/',
  body('userId').notEmpty().withMessage('Nombre obligatorio'),
  body('shippingDetails').isObject().notEmpty(),
  body('items').isArray().notEmpty(),
  body('shippingPrice').isNumeric().notEmpty(),
  body('subtotal').isNumeric().notEmpty(),
  body('total').isNumeric().notEmpty(),
  validateRequest,
  protect,
  createOrder,
)
//agregar el get -> controller getOrder
export default router
