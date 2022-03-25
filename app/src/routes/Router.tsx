import { memo, VFC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { LoginUserProvider } from '../providers/LoginUserProvider';
import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: VFC = memo(() => (
  <LoginUserProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Outlet />}>
        <Route
          index
          element={
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          }
        />
        {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<HeaderLayout>{route.children}</HeaderLayout>} />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </LoginUserProvider>
));
