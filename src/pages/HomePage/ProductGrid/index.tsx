import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../../components/ProductCard";
import type { IProduct } from "../../../interface/IProduct";
import ProductGridSkeleton from "./ProductGridSkeleton";
import useHomeContext from "../../../hooks/home/useHomeContext";

const ProductGrid = () => {
  const { isLoading, isEmpty, skeletonCount, handleAddToCart, products } =
    useHomeContext();
  return (
    <Grid container spacing={2}>
      {isLoading ? <ProductGridSkeleton skeletonCount={skeletonCount} /> : ""}
      {!isLoading
        ? products?.map((product: IProduct) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </Grid>
          ))
        : ""}
      {isEmpty ? (
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              py: 6,
              textAlign: "center",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Không tìm thấy sản phẩm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Thử từ khóa khác hoặc xóa bộ lọc để xem tất cả sản phẩm.
            </Typography>
          </Box>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
};
export default ProductGrid;
