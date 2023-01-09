import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { phonesRouter } from './routes/phones';
import { publicRouter } from './routes/public';

const router = express.Router();
const app = express();
const API_PATH = '/.netlify/functions/server';

app.use(cors());
app.use(`${API_PATH}/phones`, phonesRouter);
app.use(`${API_PATH}/public`, publicRouter);
app.use(API_PATH, router);

router.get('/', (req, res) => {
  res.json({
    'Hello': 'Please, delete this one day.',
  });
});

export const handler = serverless(app);
