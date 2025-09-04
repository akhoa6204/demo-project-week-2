import { Card, CardContent, Skeleton, Stack } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={200} variant="rectangular" />
      <CardContent>
        <Stack spacing={1}>
          <Skeleton height={10} variant="rectangular" width={"80%"} />
          <Skeleton height={10} variant="rectangular" width={"50%"} />
          <Skeleton height={10} variant="rectangular" width={"30%"} />
        </Stack>
      </CardContent>
    </Card>
  );
};
export default ProductCardSkeleton;
