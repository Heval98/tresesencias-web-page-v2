export class Product {
  id!: string;
  name!: string;
  description!: string;
  image!: string;
  inventoryStatus!: 'INSTOCK' | 'OUTOFSTOCK' | 'LOWSTOCK';
}
