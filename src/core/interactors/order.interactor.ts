import OrderRepository from '../repositories/order.repository'
import { OrderRequestDto, OrderResponseDto } from '../dto/orderDto'
import { Result } from '../types/response'
import PaymentRepository from '../repositories/payment.repository'
import { Currencies, PaymentItem } from '../dto/mercadopago'
import { Order } from '../entities/orders'
import { Orders } from '@prisma/client'

//getOrder = no tendria ninguna dependencia

export const createOrderInteractor =
  (orderRepository: OrderRepository, paymentRepository: PaymentRepository) =>
  async (
    OrderRequestDto: OrderRequestDto
  ): Promise<Result<OrderResponseDto>> => {
    const newOrder = await orderRepository.createOrder(OrderRequestDto)

    if (!newOrder.success) {
      return newOrder
    }

    let paymentItems: PaymentItem[] = []
    OrderRequestDto.items.forEach((item) => {
      paymentItems.push({
        currency_id: Currencies.ARS,
        unit_price: item.unitPrice,
        title: item.title,
        quantity: item.quantity,
      })
    })
    const preference = await paymentRepository.createPreference({
      external_reference: newOrder.result.id.toString(),
      items: paymentItems,
      shipmentCost: OrderRequestDto.shippingPrice,
    })
    return {
      success: true,
      result: { orderId: newOrder.result.id, ...preference },
    }
  }

export const getOrderInteractor =
  (orderRepository: OrderRepository) => async (): Promise<Result<Order[]>> => {
    const orders = await orderRepository.getOrders()
    return orders
  }

export const getOrderByUserIdInteractor =
  (orderRepository: OrderRepository) =>
  async (userId: number): Promise<Result<Order[]>> => {
    const ordersById = await orderRepository.getOrdersByUserId(userId)
    return ordersById
  }
