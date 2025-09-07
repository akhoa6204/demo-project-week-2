import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { formatCurrency } from "../../helpers/common";
import { useCartContext } from "../../hooks/cart/useCartContext";

const BottomCheckoutBar = () => {
  const {
    selectedItems,
    cart,
    handleToggleAllSelectedItems,
    handleRemoveItems,
    finalTotal,
    originalTotal,
  } = useCartContext();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <FormControlLabel
          sx={{ m: 0 }}
          control={
            <Checkbox
              size="small"
              checked={selectedItems.length === cart.length && cart.length > 0}
              indeterminate={
                selectedItems.length > 0 && selectedItems.length < cart.length
              }
              onChange={handleToggleAllSelectedItems}
            />
          }
          label={
            <Typography variant="body2" color="text.secondary">
              Chọn tất cả
            </Typography>
          }
        />
        {selectedItems.length > 0 ? (
          <Typography
            variant="body2"
            color="error"
            sx={{ cursor: "pointer" }}
            onClick={() => handleRemoveItems(selectedItems)}
          >
            Xóa ({selectedItems.length})
          </Typography>
        ) : (
          ""
        )}
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack textAlign="right" spacing={0}>
          <Typography variant="caption" color="text.secondary">
            Tổng thanh toán
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="body2" color="primary" fontWeight={700}>
              {formatCurrency(finalTotal, "USD", "en-US")}
            </Typography>
            <Typography>-</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textDecoration: "line-through" }}
            >
              {formatCurrency(originalTotal, "USD", "en-US")}
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          size="small"
          sx={{ minWidth: 120, fontWeight: 700 }}
          disabled={!selectedItems.length}
        >
          Mua hàng
        </Button>
      </Stack>
    </Stack>
  );
};

export default BottomCheckoutBar;
