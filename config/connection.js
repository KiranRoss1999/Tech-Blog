const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      process.env.DB_HOST,
      process.env.DB_PORT,
      {
        host: 'localhost',
        dialect: 'postgres',
      }
    );

module.exports = sequelize;
