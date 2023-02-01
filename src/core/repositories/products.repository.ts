//TODO: Crear el CRUD de productos para un sistema de administracion

import { ProductsDto } from '../dto/productDto'
import { Products } from '../entities/product'
import { Result } from '../types/response'

export default interface ProductsRepository {
  getProducts(): Promise<Result<Products[]>>
  createProduct(data: Products): Promise<Result<ProductsDto>>
  updateProduct(data: Products): Promise<Result<Products>>
  deleteProduct(id: number): Promise<Result<Products>>
  getProductsById(id: number): Promise<Result<Products>>
}
