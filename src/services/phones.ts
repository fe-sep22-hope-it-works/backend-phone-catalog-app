import fs from 'fs/promises';
import path from 'path';
import { Phones } from '../models/Phones';

const filePath = path.resolve('public/api', 'phones.json');

// export async function getAllPhones() {
//   const data = await fs.readFile(filePath, 'utf-8');

//   return JSON.parse(data);
// }

// const { Phones } = require('../models/Phones');

export async function getAllPhones() {
  const foundUsers = await Phones.findAll();

  return foundUsers;
}
