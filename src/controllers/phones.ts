import { Response } from 'express-serve-static-core';
import { getAllPhones } from '../services/phones';

export const getAll = async (res: Response<any, Record<string, any>, number>) => {
  const allPhones = await getAllPhones();
  res.json(allPhones);
};
