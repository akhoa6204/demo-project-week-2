import { Box, Button, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const EmptyCart = ({ onContinue }: { onContinue?: () => void }) => {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 5 },
        textAlign: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Box
          sx={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: 46, color: "text.secondary" }}
          />
        </Box>

        <Typography variant="h5" fontWeight={700}>
          Giỏ hàng của bạn đang trống
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 520 }}
        >
          Hãy khám phá các sản phẩm phù hợp với bạn. Khi bạn thêm sản phẩm vào
          giỏ, chúng sẽ hiển thị ở đây.
        </Typography>

        <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
          <Button variant="contained" onClick={onContinue}>
            Tiếp tục mua sắm
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EmptyCart;
