import { OrderRequestDto } from "../dto/orderDto";
import { Order } from "../entities/orders";
import { Result } from "../types/response";

export default interface OrderRepository {
  // getOrder(): Promise<Result<CategoryDto[]>>;
  createOrder(data: OrderRequestDto): Promise<Result<Order>>;
}
