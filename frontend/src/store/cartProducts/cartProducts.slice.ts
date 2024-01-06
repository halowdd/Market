import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct, IProduct } from 'app/types';
import { RootState } from '../index';


interface ProductsState {
    cart: ICartProduct[]
}

const initialState: ProductsState = {
    cart: [],
}

export const cartProductsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProductToCart(state, action: PayloadAction<IProduct>) {
            const findingItem = state.cart.find(product => product.id === action.payload.id);
            if (findingItem) {
                const mutatedCart = state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...action.payload, amount: product.amount + 1 }
                    } else {
                        return { ...product }
                    }
                })

                return {
                    ...state,
                    cart: mutatedCart,
                }
            }

            return {
                ...state,
                cart: [...state.cart, {...action.payload, amount: 1}],
            }
        },
    }
});

export const getCart = (state: RootState) => state.cart;

export const cartReducer = cartProductsSlice.reducer
export const cartActions = cartProductsSlice.actions
