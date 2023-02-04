import {
  createCategoryInteractor,
  getCategoryInteractor,
} from './category.interactor'
import CategoryDataSource from '../../data/category.datasource'
import AuthDataSource from '../../data/auth.datasource'
import { loginAuthInteractor, signinAuthInteractor } from './auth.interactor'
import { getUserByIdInteractor } from './user.interactor'
import UserDataSource from '../../data/user.datasource'
import {
  createOrderInteractor,
  getOrderByUserIdInteractor,
  getOrderInteractor,
} from './order.interactor'
import OrderDataSource from '../../data/order.datasource'
import PaymentDataSource from '../../data/payment.datasource'
import ProductsDataSoruce from '../../data/products.datasource'
import {
  createProductInteractor,
  deleteProductInteractor,
  getProductsByIdInteractor,
  getProductsInteractor,
  updateProductInteractor,
} from './products.interactor'

// Repositories
const categoryRepository = new CategoryDataSource()
const authRepository = new AuthDataSource()
const userRepository = new UserDataSource()
const orderRepository = new OrderDataSource()
const paymentRepository = new PaymentDataSource()
const productsRepository = new ProductsDataSoruce()

// Interactors
const CreateCategoryInteractor = createCategoryInteractor(categoryRepository)
const GetCategoryInteractor = getCategoryInteractor(categoryRepository)
const LoginAuthInteractor = loginAuthInteractor(authRepository)
const SigninAuthInteractor = signinAuthInteractor(authRepository)
const GetUserByIdInteractor = getUserByIdInteractor(userRepository)
const GetOrderByUserIdInteractor = getOrderByUserIdInteractor(orderRepository)
const GetOrderInteractor = getOrderInteractor(orderRepository)
/* const GetOrderItemsByOrderId = getOrderByUserIdInteractor(orderRepository) */
const GetProductsInteractor = getProductsInteractor(productsRepository)
const GetProductsByIdInteractor = getProductsByIdInteractor(productsRepository)
const UpdateProductInteractor = updateProductInteractor(productsRepository)
const DeleteProductInteractor = deleteProductInteractor(productsRepository)
const CreateProductInteractor = createProductInteractor(productsRepository)
const CreateOrderInteractor = createOrderInteractor(
  orderRepository,
  paymentRepository
)

const interactors = {
  CreateCategoryInteractor,
  GetCategoryInteractor,
  LoginAuthInteractor,
  SigninAuthInteractor,
  GetUserByIdInteractor,
  CreateOrderInteractor,
  GetOrderByUserIdInteractor,
  /*   GetOrderItemsByOrderId, */
  GetOrderInteractor,
  GetProductsInteractor,
  GetProductsByIdInteractor,
  UpdateProductInteractor,
  DeleteProductInteractor,
  CreateProductInteractor,
}

export default interactors
