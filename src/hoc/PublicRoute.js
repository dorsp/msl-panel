import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Loading from "../pages/Loading";

export const PublicRoute = ({ component }) => {
  const { isAuth, loading } = useAuth();

  // if (!loading && isAuth) {
  return isAuth ? <Navigate to="/home" /> : component;
  // }

  // return <Loading />;
};
