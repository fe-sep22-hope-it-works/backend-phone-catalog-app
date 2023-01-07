import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { phonesRouter } from './routes/phones';
import dotenv from 'dotenv';

dotenv.config();

const { API_PATH } = process.env;
const router = express.Router();
const app = express();

app.use(cors());
app.use(`${API_PATH}`, router);
app.use(`${API_PATH}/phones`, phonesRouter);

router.get('/', (req, res) => {
  res.json({
    'Hello': 'The test works, so what?',
  });
});

export const handler = serverless(app);
