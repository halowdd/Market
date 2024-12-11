import mongoose from "mongoose";


const CartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

export default mongoose.model('Cart', CartSchema);
