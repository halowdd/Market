import ProductModel from '../models/product.js';
import { checkUserIsAdmin } from "../utils/checkUserIsAdmin.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось найти товары',
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findOne({ _id: productId });

        res.json(product);
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось найти товар',
        });
    }
};

export const deleteProductById = async (req, res) => {
    await checkUserIsAdmin(req, res);

    try {
        const productId = req.params.id;
        await ProductModel.findOneAndDelete({ _id: productId });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось удалить товар',
        });
    }
};

export const updateProductById = async (req, res) => {
    await checkUserIsAdmin(req, res);

    try {
        const productId = req.params.id;
        const product = await ProductModel.findOne({ _id: productId });

        await ProductModel.updateOne(
            {
                _id: productId,
            },
            {
                title: req.body.title,
                price: req.body.price,
                discount: req.body.discount || product.discount,
                image: req.body.image,
            }
        );

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось редактировать товар'
        });
    }
};

export const createProduct = async (req, res) => {
    await checkUserIsAdmin(req, res);

    try {
        const productDoc = new ProductModel({
            title: req.body.title,
            image: req.body.image,
            price: req.body.price,
            discount: req.body.discount,
        });

        const product = await productDoc.save();

        res.json(product);
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось добавить товар',
        });
    }
};
