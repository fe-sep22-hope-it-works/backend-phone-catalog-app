import { Phone } from '../types/Phone';

export const getBestDiscount = function(allPhones: Phone[]) {
  const discounts = allPhones
    .map((phone: Phone) => phone.fullPrice - phone.price);

  const bestDiscount = Math.max(...discounts);

  return bestDiscount;
};
