import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'app/axios'
import { IProduct } from 'app/types'

export const ProductPage = () => {
  let { productId = '' } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setErrorMessage(err.response.data.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }
  if (isLoading) {
    return <p>Загружается...</p>
  }
  if (!product) {
    return <div>продукт не найден</div>
  }
  return <div>Это страница продукта {product._id}</div>
}
