import { Phone } from '../types/Phone';
import { SortBy } from '../types/SortBy';

export function sortByQuery(allPhones: Phone[], query: SortBy): Phone[] {
  switch (query) {
  case SortBy.newest:
    return allPhones.sort((a: Phone, b: Phone) => b.year - a.year);

  case SortBy.alphabetically:
    return allPhones
      .sort((a: Phone, b: Phone) => a.name.localeCompare(b.name));

  case SortBy.price_cheap:
    return allPhones.sort((a: Phone, b: Phone) => a.price - b.price);

  case SortBy.price_expensive:
    return allPhones.sort((a: Phone, b: Phone) => b.price - a.price);

  case SortBy.capacity:
    return allPhones.sort(
      (a: Phone, b: Phone) => parseInt(b.capacity) - parseInt(a.capacity),
    );

  case SortBy.ram:
    return allPhones.sort(
      (a: Phone, b: Phone) => parseInt(b.ram) - parseInt(a.ram),
    );

  case SortBy.screen:
    return allPhones.sort(
      (a: Phone, b: Phone) => parseFloat(b.screen) - parseFloat(a.screen),
    );

  default:
    throw new Error('SortedBy should be passed');
  }
}
