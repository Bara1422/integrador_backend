import { Request, Response, NextFunction, Router } from 'express'
import { signin, login } from '../controllers/auth.controller'
import { body } from 'express-validator'
import { validateRequest } from '../middlewares/validate-request'
import Jwt from 'jsonwebtoken'

const router = Router()

router.get('/checkToken', (req: Request, res: Response) => {
  const token = req
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'No authorization token provided' })
  }
  res.status(200).json({ message: 'token is valid', data: req.headers })
})
router.post(
  '/signin',
  body('email').isEmail().withMessage('Error en Email'),
  body('name').trim().notEmpty().withMessage('Nombre obligatorio'),
  body('password').trim().notEmpty().withMessage('Password obligatorio'),
  validateRequest,
  signin
)
router.post(
  '/login',
  body('email').isEmail().withMessage('Error en Email'),
  body('password').trim().notEmpty().withMessage('Password obligatorio'),
  validateRequest,
  login
)

export default router
