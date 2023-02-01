import { Router } from 'express'
import CategoryRoutes from './category.routes'
import AuthRoutes from './auth.routes'
import OrderRoutes from './order.routes'
import ProductRoutes from './products.routes'
const router = Router()

router.use('/category', CategoryRoutes)
router.use('/auth', AuthRoutes)
router.use('/orders', OrderRoutes)
router.use('/products', ProductRoutes)

export default router
