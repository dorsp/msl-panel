import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Drawer from "../components/Drawer";
import Loading from "../pages/Loading";

export const PrivateRoute = ({ component }) => {
  const { isAuth, loading } = useAuth();
  // if (!loading && isAuth) {
  return isAuth ? <Drawer>{component}</Drawer> : "";
  // }
  // return <Loading/>
};
