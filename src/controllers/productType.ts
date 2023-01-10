import { findProductType } from '../services/productType';

export const getProductType = (req: any, res: any) => {
  const { productType } = req.params;
  const foundProductType = findProductType(productType);

  if (!foundProductType) {
    res.sendStatus(404);
    res.send();
  }

  res.statusCode = 200;
  res.send(foundProductType);
};
