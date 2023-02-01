import * as core from 'express-serve-static-core'

import { UserDto } from '../../core/dto/Auth'

declare global {
  namespace Express {
    interface Request {
      user?: UserDto
    }
  }
}
