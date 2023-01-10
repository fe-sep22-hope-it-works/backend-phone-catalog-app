import express from 'express';
import { getProductType } from '../controllers/productType';

export const productTypeRouter = express.Router();

productTypeRouter.get('/:productType', getProductType);
