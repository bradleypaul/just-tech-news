const Sequelize = require('sequelize');

const sequalize = new Sequelize('just_tech_news_db', 'paul', 'beans', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequalize;