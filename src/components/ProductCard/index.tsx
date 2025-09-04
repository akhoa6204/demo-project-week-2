import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Rating,
  Tooltip,
} from "@mui/material";
import type { IProduct } from "../../interface/IProduct";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../helpers/common";

interface Props {
  product: IProduct;
  handleAddToCart: (product: IProduct) => void;
}

const ProductCard: React.FC<Props> = ({ product, handleAddToCart }) => {
  const isOutOfStock = product.stock <= 0;

  const primaryImage = product.thumbnail || product.images?.[0];

  const finalPrice = useMemo(() => {
    const discount = Math.max(
      0,
      Math.min(100, product.discountPercentage || 0)
    );
    return +(product.price * (1 - discount / 100)).toFixed(2);
  }, [product]);

  const hasDiscount = (product.discountPercentage ?? 0) > 0;
  const naviagate = useNavigate();
  const handleMoveProductDetail = () => {
    naviagate(`/product-detail/${product.id}`);
  };
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea onClick={handleMoveProductDetail}>
        <Box sx={{ position: "relative" }}>
          {hasDiscount ? (
            <Box
              sx={{
                position: "absolute",
                bgcolor: "error.main",
                color: "error.contrastText",
                py: 0.25,
                px: 0.75,
                borderRadius: 1,
                zIndex: 1,
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              -{Math.round(product.discountPercentage)}%
            </Box>
          ) : (
            ""
          )}

          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              bgcolor: isOutOfStock ? "grey.500" : "success.main",
              color: "white",
              px: 1,
              py: 0.25,
              borderRadius: 2,
              zIndex: 1,
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            {isOutOfStock ? "Hết hàng" : "Còn hàng"}
          </Box>

          <CardMedia
            component="img"
            image={primaryImage}
            alt={`${product.brand} ${product.title} (${product.sku})`}
            sx={{
              height: 220,
              objectFit: "cover",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Tooltip title={product.title}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {product.title}
            </Typography>
          </Tooltip>

          <Stack
            direction="row"
            alignItems="baseline"
            spacing={1}
            sx={{ mb: 1 }}
          >
            <Typography variant="h6" fontWeight={700}>
              {finalPrice.toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
            {hasDiscount ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                {formatCurrency(product.price, "USD", "en-US")}
              </Typography>
            ) : (
              ""
            )}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Rating
              value={Number(product.rating) || 0}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              {product.reviews?.length
                ? `(${product.reviews.length} đánh giá)`
                : "(Chưa có đánh giá)"}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ pt: 0, pb: 2, px: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={isOutOfStock}
          aria-label={`Thêm ${product.title} vào giỏ`}
          onClick={() => handleAddToCart(product)}
        >
          {isOutOfStock ? "Thông báo khi có" : "Thêm vào giỏ"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
