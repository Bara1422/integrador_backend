import { Request, Response, NextFunction } from 'express'

import interactors from '../core/interactors'
import { NotAuthorizedError } from '../errors/not-authorized'
import jwt from 'jsonwebtoken'

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = ''
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }
  if (!token) {
    return res.redirect('/login')
  }
  try {
    const decode: any = jwt.verify(token, process.env.JWT_SECRET!)

    let user = await interactors.GetUserByIdInteractor(decode.id)

    if (!user) {
      return res.redirect('/login')
    }

    req.user = user
    return next()
  } catch (error) {
    return res.redirect('/login')
  }
}

export const authorized =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    let userRole = req.user?.role ? req.user.role.roleName : ''
    if (!roles.includes(userRole)) {
      return next(new NotAuthorizedError())
    }
    return next()
  }
