import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLogged } from '../../store/selectors';

const ProtectedRoute = ({ children }) => {
  const isLogged = useSelector(getIsLogged);
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
