// eslint-disable-next-line no-shadow
import { Response } from 'express-serve-static-core';
import {
  getAllPhones,
  getPhoneById,
  getPhoneImagesById,
  getPhoneInfoById,
  getRecommendedPhones,
} from '../services/phones';
import { getQueryInfo } from '../modules/getQueryInfo';
import { sortByQuery } from '../modules/sortByQuery';
import { paginatePhones } from '../modules/paginatePhones';

export const getAll = async(req: {
  // headers: 'application/json; charset=utf-8'; url: string;
  headers: any; url: string;
}, res: Response) => {
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

export const getOne = async(req: any, res: any) => {
  const { phoneId } = req.params;
  const foundPhone = await getPhoneById(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundPhone);
};

export const getPhoneImages = async(req: any, res: any) => {
  const { phoneId } = req.params;

  const foundImages = await getPhoneImagesById(phoneId);

  if (!foundImages) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundImages);
};

export const getAllData = async(req: any, res: any) => {
  const { phoneId } = req.params;

  const phoneInfo = await getPhoneInfoById(phoneId);

  if (!phoneInfo) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(phoneInfo);
};

export const getRecommendedById = async(req: any, res: any) => {
  const { phoneId } = req.params;
  const foundRecommendedPhones = await getRecommendedPhones(phoneId);

  if (!foundRecommendedPhones) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundRecommendedPhones);
};
