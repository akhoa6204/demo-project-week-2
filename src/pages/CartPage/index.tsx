import { Box, Container, Grid, Typography } from "@mui/material";
import TableComponent from "./TableComponent";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";
import BottomCheckoutBar from "./BottomCheckoutBar";
import CartPageSkeleton from "./Skeleton";
import { useCartContext } from "../../hooks/cart/useCartContext";

const CartPage = () => {
  const { isLoading, cart } = useCartContext();
  if (isLoading) return <CartPageSkeleton />;
  return (
    <Container sx={{ py: 3 }}>
      {cart.length ? (
        <Box position={"relative"}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
            Giỏ hàng
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 9 }}>
              <TableComponent />
            </Grid>
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{
                position: "relative",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box sx={{ position: "sticky", top: "10%" }}>
                <OrderSummary />
              </Box>
            </Grid>
          </Grid>
          <Box
            position={"fixed"}
            bottom={0}
            left={0}
            right={0}
            sx={{ bgcolor: "white", px: 2, py: 1, display: { md: "none" } }}
          >
            <BottomCheckoutBar />
          </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};
export default CartPage;
