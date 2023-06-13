import { Footer } from './Footer';
import Header from './Header';

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      <Header />
      <main className='content'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
