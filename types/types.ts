export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
export interface GetProductsResults {
  data: Product[];
}

export interface ICartItem {
  prod: Product;
}

export interface IInitVal {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}
