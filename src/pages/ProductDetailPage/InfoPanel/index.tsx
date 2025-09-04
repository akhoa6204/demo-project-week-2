import { Button, Rating, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import type { IProduct } from "../../../interface/IProduct";
import { formatCurrency } from "../../../helpers/common";
import QtyBox from "../../../components/QtyBox";

const InfoPanel = ({
  product,
  quantity = 1,
  handleChangeQuantity,
  handleAddToCart,
}: {
  product: IProduct;
  quantity: number;
  handleChangeQuantity: (id: number, newQty: number) => void;
  handleAddToCart: () => void;
}) => {
  const discounted =
    product.discountPercentage && product.discountPercentage > 0;
  const finalPrice = useMemo(() => {
    if (!discounted) return product.price;
    return Math.round(product.price * (1 - product.discountPercentage / 100));
  }, [product.price, product.discountPercentage, discounted]);

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {product.brand} • SKU: {product.sku}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" sx={{ textDecoration: "underline" }}>
            {product.rating?.toFixed?.(1) ?? product.rating}
          </Typography>
          <Rating value={product.rating} precision={0.1} readOnly />
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
              {formatCurrency(product.price, "USD", "en-EN")}
            </Typography>
          </>
        )}
      </Stack>
      <QtyBox
        quantity={quantity}
        handleChangeQuantity={handleChangeQuantity}
        id={product.id}
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
