import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../util/use-authentication";

export function ProtectedRoute({ children }) {
  const { isLogged } = useAuthentication();
  const location = useLocation();

  // TODO: uncomment - Comment to logged in without authentication

  // if (!isLogged) {
  //   return <Navigate state={{ from: location }} to="/login" replace />;
  // }

  return children;
}