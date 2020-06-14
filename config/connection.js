const Sequelize = require('sequelize');
require('dotenv').config();
const sequalize = new Sequelize('just_tech_news_db', 'paul', 'beans', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequalize;