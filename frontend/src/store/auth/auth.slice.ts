import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'app/axios'
import { RootState } from '../index'

export const fetchAuth = createAsyncThunk(
  'auth/fetchUserData',
  async (params: { login: string; password: string }) => {
    const { data } = await axios.post('/auth', params)
    return data
  }
)

export const fetchAuthProfile = createAsyncThunk(
  'auth/fetchAuthProfile',
  async () => {
    const { data } = await axios.get('/auth/profile')
    return data
  }
)

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async (params: { login: string; password: string }) => {
      const { data } = await axios.post('/register', params)
      return data
    }
)

interface AuthState {
  data: null
  isLoading: boolean
  isError: boolean
}
const initialState: AuthState = {
  data: null,
  isLoading: false,
  isError: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchAuth.rejected, (state) => {
      state.isError = true
    })
    builder.addCase(fetchAuthProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAuthProfile.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchAuthProfile.rejected, (state) => {
      state.isError = true
    })
    builder.addCase(fetchRegister.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchRegister.rejected, (state) => {
      state.isError = true
    })
  },
})

export const isAuthenticated = (state: RootState) => Boolean(state.auth.data)
export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
