import { CustomError } from './custom-error'

export class BadRequestError extends CustomError {
  statusCode = 400

  constructor(public message: string, code?: number) {
    super(message)
    this.statusCode = code ? code : this.statusCode
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }
  serializeErrors() {
    return [{ message: this.message }]
  }
}
