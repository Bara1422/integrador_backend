import { Products } from "../entities/product";

export interface CategoryDto {
  id: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  products: Products[];
}
