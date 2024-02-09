const Sequelize = require("sequelize"); 
require('dotenv').config();

const hostDB = process.env.HOST;
const userDB = process.env.USER;
const passwordDB = process.env.PASSWORD;
const databaseDB = process.env.database;


const sequelize = new Sequelize(databaseDB, userDB, passwordDB, {
    dialect: "mysql",
    host: hostDB,    
    logging: console.log,
});

const Users = require("./Users")(sequelize);

module.exports = {
    sequelize: sequelize,
    users: Users,
}