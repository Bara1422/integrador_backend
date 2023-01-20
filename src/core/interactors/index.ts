import { createCategoryInteractor } from "./category.interactor";
import CategoryDataSource from "../../data/category.datasource";
import AuthDataSource from "../../data/auth.datasource";
import { loginAuthInteractor, signinAuthInteractor } from "./auth.interactor";

// Repositories
const categoryRepository = new CategoryDataSource();
const authRepository = new AuthDataSource();

// Interactors
const CategoryInteractor = createCategoryInteractor(categoryRepository);
const LoginAuthInteractor = loginAuthInteractor(authRepository);
const SigninAuthInteractor = signinAuthInteractor(authRepository);

const interactors = {
  CategoryInteractor,
  LoginAuthInteractor,
  SigninAuthInteractor,
};

export default interactors;
