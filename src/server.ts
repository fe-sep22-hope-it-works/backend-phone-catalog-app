import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { phonesRouter } from './routes/phones';

const router = express.Router();
const app = express();
const API_PATH = '/.netlify/functions/server';

app.use(cors());
app.use(`${API_PATH}/phones`, phonesRouter);
app.use(API_PATH, router);

router.get('/', (req, res) => {
  res.json({
    'Hello': 'It seems to be working...',
  });
});

export const handler = serverless(app);
