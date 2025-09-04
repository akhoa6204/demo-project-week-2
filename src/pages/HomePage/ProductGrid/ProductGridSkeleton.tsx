import { Grid } from "@mui/material";
import ProductCardSkeleton from "../../../components/ProductCardSkeleton";

const ProductGridSkeleton = ({ skeletonCount }: { skeletonCount: number }) => {
  return (
    <>
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCardSkeleton />
        </Grid>
      ))}
    </>
  );
};
export default ProductGridSkeleton;
