import React from 'react'
import { ContainerStyled, PaperStyled, FormStyled } from './index.styled'
import { Button, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'
import { useAppSelector } from 'hooks/redux'
import { fetchRegister, isAuthenticated } from 'store/auth/auth.slice'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

export const RegistrationPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useAppSelector(isAuthenticated)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const onSubmit = async (values: { login: string; password: string }) => {
    const profile = await dispatch(fetchRegister(values))
    if (Boolean(profile.payload.token)) {
      window.localStorage.setItem('token', profile.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <ContainerStyled container justifyContent="center" alignItems="center">
      <PaperStyled elevation={4}>
        <Typography variant="h6">Регистрация</Typography>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="login"
            label="Логин"
            variant="outlined"
            error={Boolean(errors.login?.message)}
            {...register('login', { required: 'Укажите логин' })}
          />
          <TextField
            id="password"
            label="Пароль"
            type="password"
            variant="outlined"
            error={Boolean(errors.password?.message)}
            {...register('password', { required: 'Укажите пароль' })}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid}
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </FormStyled>
      </PaperStyled>
    </ContainerStyled>
  )
}
