import express from 'express';
import {
  getAll,
  getOne,
  getPhoneImages,
  getAllData,
  getRecommendedById,
} from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/recommended/:phoneId', getRecommendedById);
phonesRouter.get('/img/:phoneId', getPhoneImages);
phonesRouter.get('/ext/:phoneId', getAllData);
phonesRouter.get('/:phoneId', getOne);
phonesRouter.get('/', getAll);
