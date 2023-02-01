export interface RoleDto {
  roleId: number
  roleName: string
}

export interface AuthLogin {
  email: string
  password: string
}

export interface AuthSignIn {
  name: string
  email: string
  password: string
  roleId: number
}

export interface AuthDto {
  userId: number
  name: string
  email: string
  token: string
  expiresIn: number
  role: RoleDto
}

export interface UserDto {
  userId: number
  name: string
  email: string
  role: RoleDto
}
