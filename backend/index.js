import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import {registerValidation} from './validations/auth.js';
import UserModel from './models/user.js';
import checkAuth from './utils/checkAuth.js';
import {validationResult} from 'express-validator';


mongoose.connect(
    'mongodb+srv://halowddjob:halowddjob@cluster0.5p7zbdk.mongodb.net/market?retryWrites=true&w=majority'
).then(() => console.log('db ok'))
 .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.post('/register', registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const passwordHash = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(passwordHash, salt);

        const userDoc = new UserModel({
            login: req.body.login,
            password: hash,
            is_admin: req.body.is_admin,
        });

        const user = await userDoc.save();

        const token = jwt.sign({
           _id: user._id,
        }, 'privateKey',
        {
            expiresIn: '14d'
        });

        const { password, ...userData } = user._doc;

        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        });
    }
});

app.post('/auth', async (req, res) => {
    try {
        const user = await UserModel.findOne({ login: req.body.login });

        if (!user) {
            return res.status(200).json({
                message: 'Неверный логин или пароль',
            });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.password)

        if (!isValidPassword) {
            return res.status(200).json({
                message: 'Неверный логин или пароль',
            });
        }

        const token = jwt.sign(
            {
                _id: user._id
            },
            'privateKey',
            {
                expiresIn: '14d',
            },
        );

        const { password, ...userData } = user._doc;

        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось войти'
        });
    }
});

app.get('/auth/me', checkAuth, async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(200).json({
                message: 'Пользователь не найден'
            });
        }

        const { password, ...userData } = user._doc;

        res.json(userData);
    } catch (err) {
        return res.status(200).json({
            message: 'Пользователь не найден'
        });
    }
})

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }
});