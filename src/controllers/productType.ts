/* eslint-disable no-shadow */
import { Request, Response } from 'express';
import { findProductType } from '../services/productType';
import { ProductType } from '../types/productType';

export const getProductType = (
  req: Request<{ productType: ProductType}>, res: Response,
) => {
  const { productType } = req.params;
  const foundProductType = findProductType(productType);

  if (!foundProductType) {
    res.sendStatus(404);
    res.send();
  }

  res.statusCode = 200;
  res.send(foundProductType);
};
