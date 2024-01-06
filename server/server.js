const express = require("express");
const cors = require('cors');
const { sequelize, users: Users } = require("./database");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
    try {
        const allUsers = await Users.findAll();
        res.json(allUsers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Ошибка сервера: ' + err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
