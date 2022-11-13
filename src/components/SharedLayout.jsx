import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import GlobalStyles from './GlobalStyles';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyles />
    </>
  );
};

export default SharedLayout;
