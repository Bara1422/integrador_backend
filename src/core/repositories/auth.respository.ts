import { AuthLogin, AuthDto, AuthSignIn } from "../dto/Auth";

export default interface AuthRepository {
  login(login: AuthLogin): Promise<AuthDto | null>;
  signin(login: AuthSignIn): Promise<AuthDto | null>;
}
