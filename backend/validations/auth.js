import { body } from 'express-validator';


export const authValidation = [
  body('login', 'Логин должен иметь минимум 4 символа').isLength({ min: 4 }),
  body('password', 'Пароль должен иметь минимум 4 символа').isLength({ min: 4 }),
];
