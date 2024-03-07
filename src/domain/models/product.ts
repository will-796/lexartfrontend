export type Product = {
  id?: string;
  name: string;
  brand: string;
  model: string;
  price: string ;
  color: string;
};

export type ProductForm = Omit<Product, 'price'> & { price: number };