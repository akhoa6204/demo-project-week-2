import { Button, Rating, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { formatCurrency } from "../../../helpers/common";
import QtyBox from "../../../components/QtyBox";
import { useProductDetailContext } from "../../../hooks/product-detail/useProductDetailContext";

const InfoPanel = () => {
  const { product, quantity, handleChangeQuantity, handleAddToCart } =
    useProductDetailContext();
  const { id, discountPercentage, price, title, brand, sku, rating } = product!;
  const discounted = discountPercentage && discountPercentage > 0;
  const finalPrice = useMemo(() => {
    if (!discounted) return price;
    return Math.round(price * (1 - discountPercentage / 100));
  }, [price, discountPercentage, discounted]);

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {brand} • SKU: {sku}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" sx={{ textDecoration: "underline" }}>
            {rating?.toFixed?.(1) ?? rating}
          </Typography>
          <Rating value={rating} precision={0.1} readOnly />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="baseline">
        <Typography variant="h5" color="primary">
          {formatCurrency(finalPrice, "USD", "en-EN")}
        </Typography>
        {discounted && (
          <>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              {formatCurrency(price, "USD", "en-EN")}
            </Typography>
          </>
        )}
      </Stack>
      <QtyBox
        quantity={quantity}
        handleChangeQuantity={handleChangeQuantity}
        id={id}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleAddToCart}>
          Thêm vào giỏ
        </Button>
        <Button variant="outlined">Mua ngay</Button>
      </Stack>
    </Stack>
  );
};
export default InfoPanel;
