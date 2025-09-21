/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find((item) => item.id === id);
    return product;
  }
}
