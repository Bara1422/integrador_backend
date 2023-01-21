import {
  createCategoryInteractor,
  getCategoryInteractor,
} from "./category.interactor";
import CategoryDataSource from "../../data/category.datasource";
import AuthDataSource from "../../data/auth.datasource";
import { loginAuthInteractor, signinAuthInteractor } from "./auth.interactor";
import { getUserByIdInteractor } from "./user.interactor";
import UserDataSource from "../../data/user.datasource";

// Repositories
const categoryRepository = new CategoryDataSource();
const authRepository = new AuthDataSource();
const userRepository = new UserDataSource();

// Interactors
const CreateCategoryInteractor = createCategoryInteractor(categoryRepository);
const GetCategoryInteractor = getCategoryInteractor(categoryRepository);
const LoginAuthInteractor = loginAuthInteractor(authRepository);
const SigninAuthInteractor = signinAuthInteractor(authRepository);
const GetUserByIdInteractor = getUserByIdInteractor(userRepository);

const interactors = {
  CreateCategoryInteractor,
  GetCategoryInteractor,
  LoginAuthInteractor,
  SigninAuthInteractor,
  GetUserByIdInteractor,
};

export default interactors;
