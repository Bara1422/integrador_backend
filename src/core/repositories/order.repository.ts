import { Orders } from '@prisma/client'
import { OrderRequestDto } from '../dto/orderDto'
import { Order, OrderItems } from '../entities/orders'
import { Result } from '../types/response'

export default interface OrderRepository {
  getOrders(): Promise<Result<Order[]>>
  getOrdersByUserId(userId: number): Promise<Result<Order[]>>
  createOrder(data: OrderRequestDto): Promise<Result<Order>>
 /*  getOrderItemsByOrderId(id: number): Promise<Result<Orders>> */
}
