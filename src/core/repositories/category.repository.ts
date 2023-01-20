import { Category } from "../entities/category";

export default interface CategoryRepository {
  createCategory(category: string): Promise<Category>;
}
