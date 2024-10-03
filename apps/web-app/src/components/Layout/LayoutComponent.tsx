import { ReactNode } from 'react';
import { Header, TopBar } from '.';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      {children}
    </>
  );
};

export default Layout;
