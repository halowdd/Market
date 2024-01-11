import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { productActions } from 'store/products/products.slice'
import { cartActions } from 'store/cartProducts/cartProducts.slice'
import { authActions } from 'store/auth/auth.slice'

const actions = {
  ...authActions,
  ...productActions,
  ...cartActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
