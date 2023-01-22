import { AuthLogin, AuthDto, AuthSignIn } from "../dto/Auth";
import AuthRepository from "../repositories/auth.respository";
import { Result } from "../types/response";

export const loginAuthInteractor =
  (authRepository: AuthRepository) =>
  async (dataLogin: AuthLogin): Promise<Result<AuthDto>> => {
    const authResp = await authRepository.login(dataLogin);

    return authResp;
  };

export const signinAuthInteractor =
  (authRepository: AuthRepository) =>
  async (dataSignin: AuthSignIn): Promise<Result<AuthDto>> => {
    const authResp = await authRepository.signin(dataSignin);

    return authResp;
  };
