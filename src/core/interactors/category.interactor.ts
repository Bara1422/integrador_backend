import { Category } from "../entities/category";
import CategoryRepository from "../repositories/category.repository";
import { Result } from "../types/response";

export const getCategoryInteractor =
  (categoryRepository: CategoryRepository) =>
  async (): Promise<Result<Category[]>> => {
    const categories = await categoryRepository.getCategory();
    return categories;
  };
export const createCategoryInteractor =
  (categoryRepository: CategoryRepository) =>
  async (categoryName: string): Promise<Result<Category>> => {
    const newCategory = await categoryRepository.createCategory(categoryName);
    return newCategory;
  };
