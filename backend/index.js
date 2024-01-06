import express from 'express';
import mongoose from 'mongoose';
import { authValidation } from './validations/auth.js';
import { productCreateValidation } from "./validations/productCreate.js";
import checkAuth from './utils/checkAuth.js';
import * as UserController from "./controllers/UserController.js";
import * as ProductController from "./controllers/ProductController.js";
import multer from 'multer';
import { handleValidationErrors } from "./utils/handleValidationErrors.js";


mongoose.connect(
    'mongodb+srv://halowddjob:halowddjob@cluster0.5p7zbdk.mongodb.net/market?retryWrites=true&w=majority'
).then(() => console.log('db ok'))
 .catch((err) => console.log(err));

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
})

const upload = multer({ storage });

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.get('/auth/me', checkAuth, UserController.getMe);
app.post('/register', handleValidationErrors, authValidation, UserController.register);
app.post('/auth', handleValidationErrors, authValidation, UserController.auth);

app.get('/products', ProductController.getAllProducts);
app.post('/products', checkAuth, productCreateValidation, ProductController.createProduct);
app.get('/products/:id', ProductController.getProductById);
app.put('/products/:id', checkAuth, ProductController.updateProductById);
app.delete('/products/:id', checkAuth, ProductController.deleteProductById);

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }
});
