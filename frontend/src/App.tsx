import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainMenuRoutes, routes } from './app/routes';
import { Header } from './entities/Header/ui';
import { useActions } from './hooks/redux';
import { PRODUCTS_MOCK_DATA } from '__mocks__/productsMock';
import { HomePage } from './pages';


function App() {
  const { setProducts } = useActions()

  useEffect(() => {
      setProducts(PRODUCTS_MOCK_DATA)
  }, [])

  return (
      <>
        <Header routes={mainMenuRoutes} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </>
  );
}

export default App;
