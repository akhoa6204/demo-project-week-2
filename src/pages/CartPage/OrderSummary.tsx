import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { formatCurrency } from "../../helpers/common";
import { useCartContext } from "../../hooks/cart/useCartContext";

const OrderSummary = () => {
  const { selectedItems, originalTotal, discountTotal, finalTotal } =
    useCartContext();
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: 2.5,
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={1.5} textAlign={"center"}>
        Thanh toán
      </Typography>

      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Sản phẩm đã chọn</Typography>
        <Typography fontWeight={600}>{selectedItems.length}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Tạm tính</Typography>
        <Typography fontWeight={600}>
          {formatCurrency(originalTotal, "USD", "en-US")}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography color="text.secondary">Giảm giá</Typography>
        <Typography fontWeight={600} color="error.main">
          -{formatCurrency(discountTotal, "USD", "en-US")}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mb={1.5}>
        <Typography color="text.secondary">Phí vận chuyển</Typography>
        <Typography fontWeight={600}>Miễn phí</Typography>
      </Stack>

      <Divider sx={{ my: 1.5 }} />

      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography fontWeight={700}>Tổng cộng</Typography>
        <Typography variant="h6" color="primary" fontWeight={800}>
          {formatCurrency(finalTotal, "USD", "en-US")}
        </Typography>
      </Stack>

      <Button
        variant="contained"
        fullWidth
        size="large"
        // onClick={onCheckout}
        disabled={!selectedItems.length}
      >
        Thanh toán
      </Button>
    </Box>
  );
};
export default OrderSummary;
