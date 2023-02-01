import { prisma } from '../config/db'
import {
  MercadoPagoPaymentRequest,
  MercadoPagoResponse,
} from '../core/dto/mercadopago'
import PaymentRepository from '../core/repositories/payment.repository'
import { configure, preferences } from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'

export default class PaymentDataSource implements PaymentRepository {
  public async createPreference(
    data: MercadoPagoPaymentRequest
  ): Promise<MercadoPagoResponse> {
    configureMercadoPagoSDK()
    const preferenceData: CreatePreferencePayload = {
      ...data,
      back_urls: {
        pending: process.env.PENDING_URL,
        success: process.env.SUCCESS_URL,
        failure: process.env.FAILURE_URL,
      },
      shipments: {
        cost: data.shipmentCost,
      },
    }

    const preference = await preferences.create(preferenceData)
    return {
      preferenceId: preference.body.id,
      init_point: preference.body.init_point,
      sandbox_init_point: preference.body.sandbox_init_point,
    }
  }
}

function configureMercadoPagoSDK() {
  configure({
    access_token: process.env.ACCESS_TOKEN_MP!,
  })
}
