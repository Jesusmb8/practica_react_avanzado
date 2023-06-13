import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context";

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useAuth();
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;