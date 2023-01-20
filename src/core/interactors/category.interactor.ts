import { Category } from "../entities/category";
import CategoryRepository from "../repositories/category.repository";

export const createCategoryInteractor =
  (categoryRepository: CategoryRepository) =>
  async (categoryName: string): Promise<Category> => {
    const newCategory = await categoryRepository.createCategory(categoryName);
    return newCategory;
  };
