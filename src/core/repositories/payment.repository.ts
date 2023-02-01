import {
  MercadoPagoPaymentRequest,
  MercadoPagoResponse,
} from '../dto/mercadopago'

interface PaymentRepository {
  createPreference(
    data: MercadoPagoPaymentRequest
  ): Promise<MercadoPagoResponse>
}

export default PaymentRepository
