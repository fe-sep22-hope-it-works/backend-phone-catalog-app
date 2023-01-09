/* eslint-disable max-len */
import fs from 'fs/promises';
import path from 'path';
import { Phone } from 'src/types/Phone';

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

export async function getPhoneImagesById(phoneId: string) {
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

export async function getPhonesWithSamePrice(price: number, phoneId: string) {
  const allPhones = await getAllPhones();
  const phonesWithSamePrice = allPhones.filter((phone: Phone) => (
    phone.price === price
      && +phone.id !== +phoneId
  ));

  return phonesWithSamePrice;
}

export async function getRecommendedPhones(phoneId: string) {
  const foundPhone = await getPhoneById(phoneId);

  if (!foundPhone) {
    return null;
  }

  const foundPrice = foundPhone.price;
  const phonesWithSamePrice = getPhonesWithSamePrice(foundPrice, phoneId);

  return phonesWithSamePrice;
}

export async function getNewestPhones() {
  const allPhones = await getAllPhones();
  const years = allPhones.map((phone: Phone) => phone.year);
  const maxYear = Math.max(...years);

  const newestPhones = allPhones.filter((phone: Phone) => (phone.year === maxYear));

  return newestPhones;
}
