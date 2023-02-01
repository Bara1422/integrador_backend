import ProductsRepository from '../repositories/products.repository'
import { Products } from '../entities/product'
import { Result } from '../types/response'
import { ProductsDto } from '../dto/productDto'

export const createProductInteractor =
  (productsRepository: ProductsRepository) =>
  async (Products: Products): Promise<Result<ProductsDto>> => {
    const newProduct = await productsRepository.createProduct(Products)
    return newProduct
  }

export const getProductsInteractor =
  (productsRepository: ProductsRepository) =>
  async (): Promise<Result<Products[]>> => {
    const products = await productsRepository.getProducts()
    return products
  }

export const updateProductInteractor =
  (productsRepository: ProductsRepository) =>
  async (Products: Products): Promise<Result<Products>> => {
    const updateProduct = await productsRepository.updateProduct(Products)
    return updateProduct
  }

export const deleteProductInteractor =
  (productsRepository: ProductsRepository) =>
  async (id: number): Promise<Result<Products>> => {
    const deleteProduct = await productsRepository.deleteProduct(id)
    return deleteProduct
  }

export const getProductsByIdInteractor =
  (productsRepository: ProductsRepository) =>
  async (id: number): Promise<Result<Products>> => {
    const productsById = await productsRepository.getProductsById(id)
    return productsById
  }
