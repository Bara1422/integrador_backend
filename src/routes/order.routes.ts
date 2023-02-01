import { Router } from 'express'
import { body } from 'express-validator'
import { validateRequest } from '../middlewares/validate-request'

import {
  createOrder,
  getOrder,
  getOrdersByUserId,
} from '../controllers/order.controller'

import { authorized, protect } from '../middlewares/auth'

const router = Router()

router.get('/', validateRequest, protect, authorized('admin'), getOrder)
router.get('/:id', validateRequest, protect, getOrdersByUserId)
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
  createOrder
)
//agregar el get -> controller getOrder
export default router
