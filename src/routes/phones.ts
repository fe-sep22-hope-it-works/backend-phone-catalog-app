import express from 'express';
import {
  getAll,
  getOne,
  getPhoneImages,
  getAllData,
  getRecommendedById,
  getNewPhones,
  getPhonesWithDiscount,
} from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/discount', getPhonesWithDiscount);
phonesRouter.get('/new', getNewPhones);
phonesRouter.get('/recommended/:phoneId', getRecommendedById);
phonesRouter.get('/img/:phoneId', getPhoneImages);
phonesRouter.get('/ext/:phoneId', getAllData);
phonesRouter.get('/:phoneId', getOne);
phonesRouter.get('/', getAll);
