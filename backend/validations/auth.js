import {body} from 'express-validator';

export const registerValidation = [
  body('login', 'Логин должен иметь минимум 4 символа').isLength({min: 4}),
  body('password', 'Пароль должен иметь минимум 4 символа').isLength({min: 4}),
  body('is_admin', 'Поле обязательно'),
];
