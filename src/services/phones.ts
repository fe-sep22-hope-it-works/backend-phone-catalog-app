import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('public/api', 'phones.json');

export async function getAll() {
  const data = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(data);
}
// test