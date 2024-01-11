import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_admin: {
        type: Boolean,
    },
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchema);
