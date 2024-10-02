import { Header, TopBar } from '.';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
