import UserModel from "../models/user.js";

export const checkUserIsAdmin = async (req, res) => {
    const user = await UserModel.findById(req.userId);

    if (!user || !user.is_admin) {
        return res.status(403).json({
            message: 'У вас недостаточно прав',
        });
    }
};
