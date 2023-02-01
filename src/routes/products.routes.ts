import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
} from '../controllers/product.controller'
import { authorized, protect } from '../middlewares/auth'
import { validateRequest } from '../middlewares/validate-request'
import { body } from 'express-validator'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProductsById)
router.put(
  '/:id',
  validateRequest,
  protect,
  authorized('admin'),
  updateProduct
)
router.post(
  '/',
  body('name').trim().notEmpty().withMessage('Nombre obligatorio'),
  body('price').isNumeric().notEmpty().withMessage('Precio obligatorio'),
  body('imgUrl').trim().notEmpty().withMessage('URL de la imagen invalido'),
  body('categoryId')
    .isNumeric()
    .notEmpty()
    .withMessage('Id de la categoria invalido'),
  validateRequest,
  protect,
  authorized('admin'),
  createProduct
)
router.delete('/', validateRequest, protect, authorized('admin'), deleteProduct)

export default router
