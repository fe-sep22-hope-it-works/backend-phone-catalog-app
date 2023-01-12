import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { phonesRouter } from './routes/phones';
import { publicRouter } from './routes/public';
import { productTypeRouter } from './routes/productType';
import { favoritesRouter } from './routes/favorites';
import { mainRouter } from './routes/main';

const router = express.Router();
const app = express();
const API_PATH = '/.netlify/functions/server';

app.use(cors());
app.use(`${API_PATH}/favorites`, favoritesRouter);
app.use(`${API_PATH}/phones`, phonesRouter);
app.use(`${API_PATH}/public`, publicRouter);
app.use(API_PATH, router);
app.use(`${API_PATH}/`, productTypeRouter);
app.use(`${API_PATH}/`, mainRouter);

export const handler = serverless(app);
