import { Box, Container, Grid, Typography } from "@mui/material";
import TableComponent from "./TableComponent";
import useCartPage from "../../hooks/cart/useCartPage";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";
import BottomCheckoutBar from "./BottomCheckoutBar";

const CartPage = () => {
  const {
    cart,
    handleChangeQuantity,
    handleRemoveItems,
    handleToggleSelectedItems,
    handleToggleAllSelectedItems,
    handleBackToHome,
    selectedItems,
    originalTotal,
    discountTotal,
    finalTotal,
  } = useCartPage();
  return (
    <Container sx={{ py: 3 }}>
      {cart.length ? (
        <Box position={"relative"}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
            Giỏ hàng
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 9 }}>
              <TableComponent
                cart={cart}
                selectedItems={selectedItems}
                handleChangeQuantity={handleChangeQuantity}
                handleRemoveItems={handleRemoveItems}
                handleToggleAllSelectedItems={handleToggleAllSelectedItems}
                handleToggleSelectedItems={handleToggleSelectedItems}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{
                position: "relative",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box sx={{ position: "sticky", top: "10%" }}>
                <OrderSummary
                  originalTotal={originalTotal}
                  discountTotal={discountTotal}
                  finalTotal={finalTotal}
                  selectedItems={selectedItems}
                />
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
            <BottomCheckoutBar
              originalTotal={originalTotal}
              finalTotal={finalTotal}
              selectedItems={selectedItems}
              cart={cart}
              handleRemoveItems={handleRemoveItems}
              handleToggleAllSelectedItems={handleToggleAllSelectedItems}
            />
          </Box>
        </Box>
      ) : (
        <EmptyCart onContinue={handleBackToHome} />
      )}
    </Container>
  );
};
export default CartPage;
