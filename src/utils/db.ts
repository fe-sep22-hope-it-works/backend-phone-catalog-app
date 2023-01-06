// import { Sequelize } from 'sequelize';
// import * as dotenv from 'dotenv'

// dotenv.config();

// export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: true,
//         }
//     },
//     dialectModule: require('mysql2'),
// });

import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { DB_HOST, DB_PASS, DB_NAME } = process.env;

if (!DB_HOST || !DB_PASS || !DB_NAME) {
  throw new Error('Missing DB config');
}

export const db = new Sequelize(DB_NAME, DB_NAME, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
});
