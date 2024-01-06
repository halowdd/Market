import { body } from "express-validator";

export const productCreateValidation = [
    body('title', 'Введите заголовок').isLength({ min: 3 }),
    body('image', 'Неверная ссылка на фото').optional().isURL(),
    body('price', 'Введите цену'),
    body('discount').optional(),
];
