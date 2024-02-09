//чтение данных
const Sequelize = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define("Users", {
        userindex: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING(50),
        },
        email: {
            type: Sequelize.STRING(255),
        },
        password: {
            type: Sequelize.STRING(255),
        },
        role: {
            type: Sequelize.STRING(10)
        },
    }, {
        //время создания записи и апдейта
        timestamps: false,
        tableName: "users",
    });
}