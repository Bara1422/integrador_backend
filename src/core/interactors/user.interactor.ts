import { UserDto } from '../dto/Auth'
import UserRepository from '../repositories/user.repository'

export const getUserByIdInteractor =
  (userRepository: UserRepository) =>
  async (userId: number): Promise<UserDto | null> => {
    const user = await userRepository.getUserById(userId)
    return user
  }
