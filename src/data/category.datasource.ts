import { Category } from "../core/entities/category";
import CategoryRepository from "../core/repositories/category.repository";
import { prisma } from "../config/db";

export default class CategoryDataSource implements CategoryRepository {
  public async createCategory(categoryName: string): Promise<Category> {
    const category = await prisma.category.create({
      data: { category: categoryName },
    });

    return category;
  }
}
