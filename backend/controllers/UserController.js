import bcrypt from "bcrypt";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    try {
        const passwordHash = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(passwordHash, salt);

        const userDoc = new UserModel({
            login: req.body.login,
            password: hash,
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
};

export const auth = async (req, res) => {
    try {
        const user = await UserModel.findOne({ login: req.body.login });

        if (!user) {
            return res.status(200).json({
                message: 'Неверный логин или пароль',
            });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.password);

        if (!isValidPassword) {
            return res.status(200).json({
                message: 'Неверный логин или пароль',
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,
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
};

export const getProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(200).json({
                message: 'Пользователь не найден',
            });
        }

        const { password, ...userData } = user._doc;

        res.json(userData);
    } catch (err) {
        return res.status(500).json({
            message: 'Пользователь не найден',
        });
    }
};
