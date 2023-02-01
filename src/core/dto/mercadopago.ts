export enum Currencies {
  ARS = 'ARS',
}

export interface PaymentItem {
  title?: string
  description?: string
  quantity: number
  currency_id: Currencies
  unit_price: number
  picture_url?: string
}

export interface MercadoPagoResponse {
  preferenceId: string
  init_point: string
  sandbox_init_point: string
}

export interface MercadoPagoPaymentRequest {
  items: PaymentItem[]
  external_reference: string
  shipmentCost: number
}
