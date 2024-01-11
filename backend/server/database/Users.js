//чтение данных
const Sequelize = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define("Users", {
        user_id: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING(30),
        },
        email: {
            type: Sequelize.STRING(360),
        },
        password: {
            type: Sequelize.STRING(255),
        },
    }, {
        //время создания записи и апдейта
        timestamps: false,
        tableName: "users",
    });
}