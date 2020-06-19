const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => console.log('Now listening'));
});
