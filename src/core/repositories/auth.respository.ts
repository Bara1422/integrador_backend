import { AuthLogin, AuthResponse, AuthSignIn } from "../dto/Auth";

export default interface AuthRepository {
  login(login: AuthLogin): Promise<AuthResponse | null>;
  signin(login: AuthSignIn): Promise<AuthResponse | null>;
}
