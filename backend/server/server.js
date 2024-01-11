const express = require("express");
const cors = require('cors');
const { sequelize, users: Users } = require("./database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const SECRETKEY = process.env.JWT_SECRET;


app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
    try {
        const userdata = await Users.findAll();
        
        return res.status(200).json({userdata});
    } catch (error) {
        return res.status(500).json({ error: "SERVER ERROR", details: error.message });
    }
});
//РЕГЕСТРАЦИЯ
app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await Users.findOne({ where: { email: email }});

        if (existingUser) {
            return res.status(400).json({ error: "Пользователб существует!!! "});
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);
        const newUser = await Users.create({
            username: username,
            email: email,
            password: hashedPassword
        });
        res.status(201).json({ message: "Пользователь успешно зарегестрирован ", user: newUser });

    } catch (err) {
        return res.status(500).json({error: "ERROR SERVER" + err.message });
    }
});

//ЛОГИН
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await Users.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({ error: "Неверные учетные данные" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Неверные учетные данные" });
        }

        // Если пароль совпадает, отправляем успешный ответ и токен
        const token = jwt.sign({ userId: user.id }, SECRETKEY, {expiresIn: '7d'} );
        return res.status(200).json({ message: "Авторизация успешна", token });

    } catch (err) {
        return res.status(500).json({ error: "ERROR SERVER" + err.message });        
    }
});



app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    
});