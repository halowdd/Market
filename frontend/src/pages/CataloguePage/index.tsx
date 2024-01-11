import React, { useEffect } from 'react'
import { useAppSelector } from 'hooks/redux'
import { ProductsListContainerStyled } from './index.styled'
import { CatalogueProductCard } from 'entities/CatalogueProductCard'
import { fetchProducts, getAllProducts } from 'store/products/products.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'

export const CataloguePage = () => {
  const { items: products, isLoading, isError } = useAppSelector(getAllProducts)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (isError) {
    return <p>ошибка...</p>
  }
  if (isLoading) {
    return <p>Загружается...</p>
  }

  return (
    <ProductsListContainerStyled>
      {products.map((product) => (
        <CatalogueProductCard key={product._id} {...product} />
      ))}
    </ProductsListContainerStyled>
  )
}
