import { Phone } from '../types/Phone';

export async function getPhonesWithSamePrice(
  price: number,
  phoneId: number,
  allPhones: Phone[],
) {
  const phonesWithSamePrice = allPhones.filter((phone: Phone) => (
    phone.price === price
      && phone.id !== phoneId
  ));

  return phonesWithSamePrice;
}
