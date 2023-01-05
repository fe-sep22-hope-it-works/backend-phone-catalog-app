import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { phonesRouter } from './routes/phones';
import { getAll } from './controllers/phones';

const router = express.Router();

const app = express();

app.use(cors());

app.use('/phones', phonesRouter);

router.get('/phones', async (req, res) => {
  await getAll(res);
})

router.get('/', (req, res) => {
    res.json({
        'hello': '123',
    })
})

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);