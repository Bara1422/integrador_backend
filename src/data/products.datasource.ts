import { prisma } from '../config/db'
import { ProductsDto } from '../core/dto/productDto'
import { Products } from '../core/entities/product'
import ProductsRepository from '../core/repositories/products.repository'
import { Result } from '../core/types/response'
import { ServerError } from '../errors/server-error'

export default class ProductsDataSoruce implements ProductsRepository {
  public async getProducts(): Promise<Result<Products[]>> {
    try {
      const products = await prisma.products.findMany()
      return { success: true, result: products }
    } catch (error) {
      let err = new ServerError('Algo salio mal al traer productos')
      return { success: false, err }
    }
  }

  public async createProduct(data: Products): Promise<Result<ProductsDto>> {
    try {
      const product: Products = await prisma.products.create({
        data: {
          id: data.id,
          name: data.name,
          price: data.price,
          imgUrl: data.imgUrl,
          categoryId: data.categoryId,
        },
      })
      return { success: true, result: product }
    } catch (error) {
      return { success: false, err: new ServerError('Error al crear producto') }
    }
  }

  public async updateProduct(data: Products): Promise<Result<Products>> {
    try {
      const product = await prisma.products.update({
        where: {
          id: data.id,
        },
        data: {
          name: data.name,
          price: data.price,
          imgUrl: data.imgUrl,
          categoryId: data.categoryId,
        },
      })
      return { success: true, result: product }
    } catch (error) {
      return {
        success: false,
        err: new ServerError('Error al modificar producto'),
      }
    }
  }

  public async deleteProduct(id: number): Promise<Result<Products>> {
    try {
      const deleteProduct = await prisma.products.delete({
        where: {
          id: id,
        },
      })
      return { success: true, result: deleteProduct }
    } catch (error) {
      return {
        success: false,
        err: new ServerError('Error al borrar producto'),
      }
    }
  }

  public async getProductsById(id: number): Promise<Result<Products>> {
    const getProductsById = await prisma.products.findUnique({
      where: { id: id },
    })
    if (!getProductsById)
      return {
        success: false,
        err: new ServerError('No hay productos con este ID'),
      }

    return { success: true, result: getProductsById }
  }
}
