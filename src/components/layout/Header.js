import { Link, NavLink } from 'react-router-dom';
import { logout } from '../auth/service';
import './Header.css';
import { ReactComponent as ReactLogo } from '../../assets/logo-wallapop.svg';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../store/actions';
import { getIsLogged } from '../../store/selectors';

const Header = (...rest) => {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(authLogout());

  const handleLogoutClick = async () => {
    if (window.confirm('¿Quiere cerrar sesión?')) {
      await logout();
      onLogout();
    }
  };
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='nav-logo'>
          <ReactLogo />
          <h1>Nodepop</h1>
        </div>
        <span className='nav-links'>
          <NavLink className='link' to='/adverts'>
            Listado de anuncios
          </NavLink>
          <NavLink className='link' to='/adverts/new'>
            Nuevo anuncio
          </NavLink>
          {isLogged ? (
            <button onClick={handleLogoutClick} className='header-button'>
              Logout
            </button>
          ) : (
            <button as={Link} variant='primary' className='header-button' to='/login'>
              Login
            </button>
          )}
        </span>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
