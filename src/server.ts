import express from 'express';
import cors from 'cors';


// import * as goodController from "./controllers/goods";
// import * as colorsController from "./controllers/colors";
import serverless from 'serverless-http';
import { getAll } from './services/phones';

const router = express.Router();

const app = express();

app.use(cors());

router.get('/phones', async (req, res) => {
  const allPhones = await getAll();
  res.json(allPhones);

})


router.get('/', (req, res) => {
    res.json({
        'hello': '123',
    })
})

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);