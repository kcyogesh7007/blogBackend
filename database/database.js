const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.URI);

sequelize
  .authenticate()
  .then(() => {
    console.log("authenticated successfully");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.blog = require("../models/blogModel")(sequelize, DataTypes);

sequelize.sync({ alter: false }).then(() => {
  console.log("Migrated successfully");
});

module.exports = db;
