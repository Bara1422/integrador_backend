export interface UserAddress {
  id: number;
  street: string;
  number: string;
  zipcode: string;
  city: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: number;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
