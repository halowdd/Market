import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/products.slice';
import { cartReducer } from './cartProducts/cartProducts.slice';


export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
