import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

const PublicRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? <HomePage /> : <Outlet />;
};
export default PublicRoute