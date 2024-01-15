import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'app/axios'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'hooks/redux'
import { isAdminLicense } from 'store/auth/auth.slice'

export const ProfilePage = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [discount, setDiscount] = useState('')
  const isAdmin = useAppSelector(isAdminLicense)
  const onSubmit = () => {
    const params = { title, price, image, discount }
    axios.post('/products', params)
  }

  if (isAdmin) {
    return <Navigate to="/" />
  }

  return (
    <form>
      <TextField
        id="title"
        label="Название"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        fullWidth
      />
      <TextField
        id="price"
        label="Цена"
        variant="outlined"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        fullWidth
      />
      <TextField
        id="image"
        label="Фото"
        variant="outlined"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        fullWidth
      />
      <TextField
        id="discount"
        label="Скидка"
        variant="outlined"
        value={discount}
        onChange={(event) => setDiscount(event.target.value)}
        fullWidth
      />
      <Button
        onClick={onSubmit}
        variant="contained"
        fullWidth
        disabled={!title || !price}
      >
        Авторизоваться
      </Button>
    </form>
  )
}
