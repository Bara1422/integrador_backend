import { Category } from "../entities/category";

export default interface CategoryRepository {
  getCategory(): Promise<Category[]>;
  createCategory(category: string): Promise<Category>;
}
