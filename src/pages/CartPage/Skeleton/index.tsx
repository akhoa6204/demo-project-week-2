import { Box, Container, Grid, Skeleton } from "@mui/material";
import TableComponentSkeleton from "./TableComponentSkeleton";
import OrderSummarySkeleton from "./OrderSummarySkeleton";
import BottomCheckoutBarSkeleton from "./BottomCheckoutBarSkeleton";

const CartPageSkeleton = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Box position="relative">
        <Skeleton variant="text" width={120} height={36} sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 9 }}>
            <TableComponentSkeleton rows={3} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ position: "sticky", top: "10%" }}>
              <OrderSummarySkeleton />
            </Box>
          </Grid>
        </Grid>

        <Box
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          sx={{ bgcolor: "white", px: 2, py: 1, display: { md: "none" } }}
        >
          <BottomCheckoutBarSkeleton />
        </Box>
      </Box>
    </Container>
  );
};

export default CartPageSkeleton;
