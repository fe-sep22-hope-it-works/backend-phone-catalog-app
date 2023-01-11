// eslint-disable-next-line no-shadow
import { Response, Request } from 'express';
import {
  getAllPhones,
  getPhoneById,
  getPhoneImagesById,
  getPhoneInfoById,
  getRecommendedPhones,
  getNewestPhones,
  getBestDiscountPhones,
} from '../services/phones';
import { getQueryInfo } from '../modules/getQueryInfo';
import { sortByQuery } from '../modules/sortByQuery';
import { paginatePhones } from '../modules/paginatePhones';

export const getAll = async(req: Request, res: Response) => {
  const allPhones = await getAllPhones();
  const totalPhones = Object.keys(allPhones).length;
  const { sortedby, page, phonesQuantity } = getQueryInfo(req);
  const totalPages = Math.ceil(totalPhones / +phonesQuantity);

  if (totalPages < +page) {
    res.sendStatus(404);

    return;
  }

  const sortedPhones = sortByQuery(allPhones, sortedby);
  const paginatedPhones = paginatePhones(sortedPhones, +phonesQuantity, +page);

  const responsePhones = {
    paginatedPhones,
    page,
    totalPages,
    totalPhones,
  };

  res.statusCode = 200;
  res.json(responsePhones);
};

export const getOne = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const foundPhone = await getPhoneById(Number(phoneId));

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundPhone);
};

export const getPhoneImages = async(req: Request, res: Response) => {
  const { phoneId } = req.params;

  const foundImages = await getPhoneImagesById(Number(phoneId));

  if (!foundImages) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundImages);
};

export const getAllData = async(req: Request, res: Response) => {
  const { phoneId } = req.params;

  const phoneInfo = await getPhoneInfoById(Number(phoneId));

  if (!phoneInfo) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(phoneInfo);
};

export const getRecommendedById = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const foundRecommendedPhones = await getRecommendedPhones(Number(phoneId));

  if (!foundRecommendedPhones) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundRecommendedPhones);
};

export const getNewPhones = async(req: Request, res: Response) => {
  const newestPhones = await getNewestPhones();

  res.send(newestPhones);
};

export const getPhonesWithDiscount = async(req: Request, res: Response) => {
  const phonesWithDiscount = await getBestDiscountPhones();

  res.send(phonesWithDiscount);
};
