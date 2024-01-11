import express from 'express';
import mongoose from 'mongoose';
import { authValidation } from './validations/auth.js';
import { productCreateValidation } from "./validations/productCreate.js";
import checkAuth from './utils/checkAuth.js';
import cors from 'cors';
import * as UserController from "./controllers/UserController.js";
import * as ProductController from "./controllers/ProductController.js";
import { handleValidationErrors } from "./utils/handleValidationErrors.js";
import {getProfile} from "./controllers/UserController.js";


mongoose.connect(
    'mongodb+srv://halowddjob:halowddjob@cluster0.5p7zbdk.mongodb.net/market?retryWrites=true&w=majority'
).then(() => console.log('db ok'))
 .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/auth/profile', checkAuth, UserController.getProfile);
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
