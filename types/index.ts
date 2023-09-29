export type UserDetails = {
  name: string;
  email: string;
  state: string;
  number: number;
  address: string;
};

export type loginSchema = {
  email: string;
  password: string;
};

export type registerSchema = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type Cart = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
};
