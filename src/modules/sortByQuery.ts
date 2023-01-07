/* eslint-disable max-len */
import { Phone } from '../types/Phone';

// type SortBy = 'newest' | 'alphabetically' | 'price_cheap' | 'price_expensive' | 'capacity';

export function sortByQuery(allPhones: Phone[], query: string): Phone[] {
  switch (query) {
  case 'newest':
    return allPhones.sort((a: Phone, b: Phone) => (b.year - a.year));

  case 'alphabetically':
    return allPhones
      .sort((a: Phone, b: Phone) => (a.name.localeCompare(b.name)));

  case 'price_cheap':
    return allPhones.sort((a: Phone, b: Phone) => (a.price - b.price));

  case 'price_expensive':
    return allPhones.sort((a: Phone, b: Phone) => (b.price - a.price));

  case 'capacity':
    return allPhones.sort((a: Phone, b: Phone) => (parseInt(b.capacity) - parseInt(a.capacity)));

  case 'ram':
    return allPhones.sort((a: Phone, b: Phone) => (parseInt(b.ram) - parseInt(a.ram)));

  case 'screen':
    return allPhones.sort((a: Phone, b: Phone) => (parseFloat(b.screen) - parseFloat(a.screen)));

  default:
    throw new Error('SortedBy should be passed');
  }
}
