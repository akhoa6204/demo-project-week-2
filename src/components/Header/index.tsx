import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const navLinks = [
  {
    path: "/",
    label: "Trang chủ",
  },
  {
    path: "/cart",
    label: "Giỏ hàng",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  };
  return (
    <AppBar sx={{ position: "fixed" }}>
      <Container>
        <Toolbar>
          <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
            my app
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"flex-end"}
            flex={1}
            spacing={2}
          >
            {navLinks.map((item) => (
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
                key={item.label}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
            <Typography onClick={handleLogOut}>Đăng xuất</Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
