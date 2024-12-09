import { ReactNode } from 'react';
import { Header, TopBar } from '.';
import { Outlet } from 'react-router-dom';
import { Modal } from '@helebba/design-system/web';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Modal>
      <TopBar />
      <Header />
      <Outlet />
      {children}
    </Modal>
  );
};

export default Layout;
