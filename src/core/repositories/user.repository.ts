import { UserDto } from '../dto/Auth'

export default interface UserRepository {
  getUserById(userId: number): Promise<UserDto | null>
}
