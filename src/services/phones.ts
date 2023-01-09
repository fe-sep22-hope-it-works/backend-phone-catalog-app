import fs from 'fs/promises';
import path from 'path';
import http from 'http';

export async function getAllPhones() {
  const filePath = path.resolve('public/api', 'phones.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData = JSON.parse(data);

  return parsedData;
}

export async function getPhoneById(phoneId: any) {
  const allPhones = await getAllPhones();
  const foundPhone = allPhones.find((phone: any) => phone.id === phoneId);

  return foundPhone || null;
}

export async function getPhoneInfoById(phoneId: any) {
  const foundPhone = await getPhoneById(phoneId);

  if (!foundPhone) {
    return null;
  }

  const itemId = foundPhone.itemId;
  const filePath = path.resolve('public/api/phones/', `${itemId}.json`);
  const phoneInfo = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(phoneInfo) || null;
}

export async function getPhoneImagesById(phoneId: any) {
  const phoneInfo = await getPhoneInfoById(phoneId);

  if (!phoneInfo) {
    return null;
  }

  const imagesPath = phoneInfo.images;
  const phoneImages = imagesPath.reduce((accumulator: any, element: any) => {
    const filePath = path.resolve('public/', element);
    const image = fs.readFile(filePath, 'base64');

    return [...accumulator, image];
  }, []);

  const results = Promise.all(phoneImages);

  return results;
}
