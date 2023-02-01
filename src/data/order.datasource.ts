import { OrderRequestDto } from '../core/dto/orderDto'
import { Order, OrderItems } from '../core/entities/orders'
import OrderRepository from '../core/repositories/order.repository'
import { Result } from '../core/types/response'
import { prisma } from '../config/db'
import { ServerError } from '../errors/server-error'
import { Orders } from '@prisma/client'

export default class OrderDatasource implements OrderRepository {
  public async createOrder(data: OrderRequestDto): Promise<Result<Order>> {
    const state = await prisma.states.findUnique({
      where: {
        state: 'pending',
      },
    })

    if (!state) {
      return { success: false, err: new ServerError('Erroren el servidor') }
    }

    const oi: OrderItems[] = data.OrderItems.map((item) => {
      return {
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        productsId: item.productId,
      }
    })
    try {
      const order: Order = await prisma.orders.create({
        data: {
          userId: data.userId,
          statusId: state.id,
          shippingPrice: data.shippingPrice,
          total: data.total,
          subtotal: data.subtotal,
          OrderItems: {
            createMany: {
              data: [...oi],
            },
          },
          ShippingDetails: {
            create: {
              ...data.shippingDetails,
            },
          },
        },
      })

      return { success: true, result: order }
    } catch (error) {
      return { success: false, err: new ServerError('Hubo un error') }
    }
  }
  public async getOrders(): Promise<Result<Order[]>> {
    try {
      const orders = await prisma.orders.findMany()
      return { success: true, result: orders }
    } catch (error) {
      let err = new ServerError('Algo salio mal al traer ordenes')
      return { success: false, err }
    }
  }
  public async getOrdersByUserId(userId: number): Promise<Result<Order[]>> {
    const ordersByUserId = await prisma.orders.findMany({
      where: { userId: userId },
    })
    if (!ordersByUserId) {
      let err = new ServerError('No hay ordenes de este usuario')
    }
    return { success: true, result: ordersByUserId }
  }
}
