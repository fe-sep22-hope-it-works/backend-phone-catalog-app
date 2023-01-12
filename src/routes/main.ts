import express from 'express';

export const mainRouter = express.Router();

mainRouter.get('', (req, res) => {
  res.json({
    'Hello!': 'This is main route. Pealse, use commands from README.md ',
  });
});
