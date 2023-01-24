import {
  createCategoryInteractor,
  getCategoryInteractor,
} from "./category.interactor";
import CategoryDataSource from "../../data/category.datasource";
import AuthDataSource from "../../data/auth.datasource";
import { loginAuthInteractor, signinAuthInteractor } from "./auth.interactor";
import { getUserByIdInteractor } from "./user.interactor";
import UserDataSource from "../../data/user.datasource";
import { createOrderInteractor } from "./order.interactor";
import OrderDataSource from "../../data/order.datasource";
import PaymentDataSource from "../../data/payment.datasource";

// Repositories
const categoryRepository = new CategoryDataSource();
const authRepository = new AuthDataSource();
const userRepository = new UserDataSource();
const orderRepository = new OrderDataSource();
const paymentRepository = new PaymentDataSource();

// Interactors
const CreateCategoryInteractor = createCategoryInteractor(categoryRepository);
const GetCategoryInteractor = getCategoryInteractor(categoryRepository);
const LoginAuthInteractor = loginAuthInteractor(authRepository);
const SigninAuthInteractor = signinAuthInteractor(authRepository);
const GetUserByIdInteractor = getUserByIdInteractor(userRepository);
const CreateOrderInteractor = createOrderInteractor(
  orderRepository,
  paymentRepository
);

const interactors = {
  CreateCategoryInteractor,
  GetCategoryInteractor,
  LoginAuthInteractor,
  SigninAuthInteractor,
  GetUserByIdInteractor,
  CreateOrderInteractor,
};

export default interactors;
