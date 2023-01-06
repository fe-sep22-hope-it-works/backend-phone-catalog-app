import DataTypes from 'sequelize';
import { db } from '../utils/db';

export const Phones = db.define('Phones', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fullPrice: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  screen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  capacity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  year: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'phones',
  updatedAt: false,
  createdAt: false,
});
