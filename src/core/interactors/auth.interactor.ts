import { AuthLogin, AuthDto, AuthSignIn } from "../dto/Auth";
import AuthRepository from "../repositories/auth.respository";

export const loginAuthInteractor =
  (authRepository: AuthRepository) =>
  async (dataLogin: AuthLogin): Promise<AuthDto | null> => {
    const authResp = await authRepository.login(dataLogin);

    return authResp;
  };

export const signinAuthInteractor =
  (authRepository: AuthRepository) =>
  async (dataSignin: AuthSignIn): Promise<AuthDto | null> => {
    const authResp = await authRepository.signin(dataSignin);

    return authResp;
  };
