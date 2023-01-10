import { ProductType } from '../types/productType';

export function findProductType(productType: ProductType) {
  switch (productType) {
  case ProductType.tablets:
  case ProductType.accessories:
    return [];

  default:
    return null;
  }
}
