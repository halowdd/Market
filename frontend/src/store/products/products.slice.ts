import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'app/types';
import { RootState } from 'store/index';


interface ProductsState {
    products: IProduct[]
}

const initialState: ProductsState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            return {
                ...state,
                products: action.payload,
            }
        },
        setFavourite(state, action: PayloadAction<number>) {
            const mutatedProducts = state.products.map(product => {
                if (product.id === action.payload) {
                    return { ...product, isFavourite: !product.isFavourite}
                } else {
                    return {...product}
                }
            })
            return {
                ...state,
                products: mutatedProducts,
            }
        },
    }
});

export const getAllProducts = (state: RootState) => state.products.products;
export const getProductById = (state: RootState, productId: number) => state.products.products.find(product => product.id === productId);
export const getFavouriteProducts = (state: RootState) => state.products.products.filter(product => product.isFavourite);

export const productReducer = productsSlice.reducer
export const productActions = productsSlice.actions
