import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { mainMenuRoutes, routes } from './app/routes'
import { Header } from './entities/Header/ui'
import { HomePage } from './pages'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'
import { fetchAuthProfile } from './store/auth/auth.slice'
import { SnackbarProvider } from 'notistack'


function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchAuthProfile())
  }, [])

  return (
    <SnackbarProvider>
      <Header routes={mainMenuRoutes} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </SnackbarProvider>
  )
}

export default App
