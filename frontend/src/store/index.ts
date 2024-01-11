import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'
import { productReducer } from './products/products.slice'
import { cartReducer } from './cartProducts/cartProducts.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
