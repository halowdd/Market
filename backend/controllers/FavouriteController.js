const User = require('../models/user.js');
const Product = require('../models/product.js');


exports.getFavorites = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId).populate('favorites');

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        res.json(user.favorites);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
};

exports.addFavorite = async (req, res) => {
    const userId = req.params.userId;
    const { productId } = req.body;

    try {
        const user = await User.findById(userId);
        const product = await Product.findById(productId);

        if (!user || !product) {
            return res.status(404).json({ message: 'Пользователь или товар не найден' });
        }

        if (!user.favorites.includes(productId)) {
            user.favorites.push(productId);
            await user.save();
        }

        res.json({ message: 'Товар добавлен в избранное' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
};

exports.removeFavorite = async (req, res) => {
    const userId = req.params.userId;
    const { productId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user || !user.favorites.includes(productId)) {
            return res.status(404).json({ message: 'Пользователь не найден или товар не в избранном' });
        }

        user.favorites = user.favorites.filter(id => id.toString() !== productId);
        await user.save();

        res.json({ message: 'Товар удален из избранного' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
};
