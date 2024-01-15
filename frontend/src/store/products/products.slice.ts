import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'app/types'
import { RootState } from 'store/index'
import axios from 'app/axios'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const { data } = await axios.get('/products')
    return data
  }
)

interface ProductsState {
  products: {
    items: IProduct[]
    isLoading: boolean
    isError: boolean
  }
}

const initialState: ProductsState = {
  products: {
    items: [],
    isLoading: false,
    isError: false,
  },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.items = action.payload
      state.products.isLoading = false
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products.items = []
      state.products.isError = true
    })
  },
})

export const getAllProducts = (state: RootState) => state.products.products
export const getFavouriteProducts = (state: RootState) =>
  state.products.products.items.filter((product) => product.isFavourite)

export const productReducer = productsSlice.reducer
export const productActions = productsSlice.actions
