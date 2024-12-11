import React from 'react'
import { ContainerStyled, FormStyled, PaperStyled } from './index.styled'
import { TextField, Typography } from '@mui/material'
import { Button } from "../../shared/Button/ui";
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchAuth, isAuthenticated } from 'store/auth/auth.slice'
import { useAppSelector } from 'hooks/redux'
import { AppDispatch } from 'store'
import { Navigate } from 'react-router-dom'
import { BUTTON_SIZE_VARIANT } from '../../shared/Button/config/enums'

export const LoginPage = () => {
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
    const profile = await dispatch(fetchAuth(values))
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
        <Typography variant="h6">Вход в профиль</Typography>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="login"
            label="Логин"
            variant="outlined"
            error={Boolean(errors.login?.message)}
            {...register('login', { required: 'Укажите логин' })}
            fullWidth
          />
          <TextField
            id="password"
            label="Пароль"
            type="password"
            variant="outlined"
            error={Boolean(errors.password?.message)}
            {...register('password', { required: 'Укажите пароль' })}
            fullWidth
          />
          <Button
            commonProps={{ type: 'submit' }}
            fullWidth
            size={BUTTON_SIZE_VARIANT.small}
          >
            Авторизоваться
          </Button>
        </FormStyled>
      </PaperStyled>
    </ContainerStyled>
  )
}
