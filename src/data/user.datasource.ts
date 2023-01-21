import { prisma } from "../config/db";
import { UserDto } from "../core/dto/Auth";
import UserRepository from "../core/repositories/user.repository";

export default class UserDataSource implements UserRepository {
  public async getUserById(userId: number): Promise<UserDto | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: true,
      },
    });

    if (!user) {
      return null;
    }
    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      role: {
        roleId: user.roleId,
        roleName: user.role.role,
      },
    };
  }
}
