import CartModel from '../models/cart.js';

export const getCartProducts = async (req, res) => {
    try {
        const userId = req.params.userId;
        const products = await CartModel.find();

        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось найти товары',
        });
    }
};

export const removeProductById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const productId = req.params.id;
        await CartModel.findOneAndDelete({ _id: productId });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось удалить товар',
        });
    }
};

export const addProductById = async (req, res) => {
    try {
        const productDoc = new CartModel({
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
