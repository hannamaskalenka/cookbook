import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
