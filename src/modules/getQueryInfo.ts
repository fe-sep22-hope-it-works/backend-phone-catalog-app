/* eslint-disable no-shadow */
import { Request } from 'express';

export function getQueryInfo(req: Request) {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const params = Object.fromEntries(normalizedURL.searchParams.entries());

  return params;
}
