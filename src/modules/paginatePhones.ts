import { Phone } from '../types/Phone';

export function paginatePhones(
  sortedPhones: Phone[],
  phonesQuantity: number,
  page: number,
): Phone[] {
  const x = page * phonesQuantity;

  return sortedPhones.slice(x - phonesQuantity, x);
}
