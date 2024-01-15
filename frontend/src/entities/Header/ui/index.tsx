import React from 'react'
import { IRoute } from 'app/types'
import { useLocation, Link } from 'react-router-dom'
import { Button, Typography, useMediaQuery } from '@mui/material'
import {
  HeaderContainerStyled,
  NavigationListContainerStyled,
  LinkContainerStyled,
  LinkLabelStyled,
  RightSideHeaderStyled,
  FavouriteBlockStyled,
} from './index.styled'
import { HeartIcon } from 'app/static'
import { CartPopper } from '../../CartPopper'
import { useActions, useAppSelector } from '../../../hooks/redux'
import { isAuthenticated } from '../../../store/auth/auth.slice'

interface IProps {
  routes: IRoute[]
}
export const Header = ({ routes }: IProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const { pathname } = useLocation()
  const isAuth = useAppSelector(isAuthenticated)
  const { logout } = useActions()

  const onLogout = () => {
    logout()
    window.localStorage.removeItem('token')
  }

  return (
    <HeaderContainerStyled>
      <Typography>Logo</Typography>
      {!isMobile && (
        <NavigationListContainerStyled>
          {routes.map((item, index) => {
            const isActiveUrl = pathname.includes(item.path)
            return (
              <LinkContainerStyled
                key={index}
                to={item.path}
                isActive={isActiveUrl}
              >
                <LinkLabelStyled id="label">{item.label}</LinkLabelStyled>
              </LinkContainerStyled>
            )
          })}
        </NavigationListContainerStyled>
      )}
      <RightSideHeaderStyled>
        <FavouriteBlockStyled to="favourite">
          <HeartIcon />
          <Typography variant="body2">Избранное</Typography>
        </FavouriteBlockStyled>
        <CartPopper />
        {isAuth ? (
          <>
            <Link to="/profile">Профиль</Link>
            <Button onClick={onLogout} variant="outlined" color="error">
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/registration">Регистрация</Link>
          </>
        )}
      </RightSideHeaderStyled>
    </HeaderContainerStyled>
  )
}
