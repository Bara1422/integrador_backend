export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthSignIn {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  userId: number;
  name: string;
  email: string;
  token: string;
  expiresIn: number;
}
