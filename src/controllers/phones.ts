// eslint-disable-next-line no-shadow
import { Response } from 'express-serve-static-core';
import { getAllPhones } from '../services/phones';
import { getQueryInfo } from '../modules/getQueryInfo';
import { sortByQuery } from '../modules/sortByQuery';
import { paginatePhones } from '../modules/paginatePhones';

export const getAll = async(req: {
  headers: 'application/json; charset=utf-8'; url: string;
}, res: Response) => {
  const allPhones = await getAllPhones();
  const { sortedby, page, phonesQuantity } = getQueryInfo(req);
  const totalPhones = Object.keys(allPhones).length;
  const sortedPhones = sortByQuery(allPhones, sortedby);
  const paginatedPhones = paginatePhones(sortedPhones, +phonesQuantity, +page);
  const totalPages = Math.ceil(totalPhones / +phonesQuantity);

  const responsePhones = {
    paginatedPhones,
    page,
    totalPages,
    totalPhones,
  };

  res.json(responsePhones);
};
