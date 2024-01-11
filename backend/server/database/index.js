const Sequelize = require("sequelize"); 
const cfg = require("./config");

const sequelize = new Sequelize(cfg.database, cfg.user, cfg.password, {
    dialect: "mysql",
    host: cfg.host,    
    logging: console.log,
});

const Users = require("./Users")(sequelize);

module.exports = {
    sequelize: sequelize,
    users: Users,
}