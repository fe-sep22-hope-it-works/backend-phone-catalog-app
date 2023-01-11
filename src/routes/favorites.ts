import express from 'express';
import {
  getAllFavorites,
  addFavorite,
  deleteFavorite,
} from '../controllers/favorites';

export const favoritesRouter = express.Router();

favoritesRouter.get('/getAll', getAllFavorites);
favoritesRouter.get('/addOne/:phoneId', addFavorite);
favoritesRouter.get('/deleteOne/:phoneId', deleteFavorite);
