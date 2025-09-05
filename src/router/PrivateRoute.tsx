import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? <Outlet /> : <LoginPage />;
};
export default PrivateRoute;
