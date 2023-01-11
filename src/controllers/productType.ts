// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import { findProductType } from '../services/productType';

export const getProductType = (req: Request, res: Response) => {
  const { productType } = req.params;
  const foundProductType = findProductType(productType);

  if (!foundProductType) {
    res.sendStatus(404);
    res.send();
  }

  res.statusCode = 200;
  res.send(foundProductType);
};
