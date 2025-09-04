import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Box sx={{ mt: 8 }}>
        <Outlet />
      </Box>
    </>
  );
};
export default DefaultLayout;
