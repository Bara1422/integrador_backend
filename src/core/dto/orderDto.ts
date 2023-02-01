export interface OrderItems {
  title: string
  quantity: number
  unitPrice: number
  productId: number
}

export interface OrderRequestDto {
  userId: number
  shippingDetails: {
    domicilio: string
    localidad: string
  }
  OrderItems: OrderItems[]
  shippingPrice: number
  subtotal: number
  total: number
}

export interface OrderResponseDto {
  orderId: number
  preferenceId: string
  init_point: string
}
