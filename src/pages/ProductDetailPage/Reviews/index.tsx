import { Stack, Typography } from "@mui/material";
import Review from "./Review";
import type { IReview } from "../../../interface/IProduct";
import { useProductDetailContext } from "../../../hooks/product-detail/useProductDetailContext";

const Reviews = () => {
  const { product } = useProductDetailContext();
  const { reviews } = product!;
  if (!reviews?.length)
    return (
      <Typography variant="body2" color="text.secondary">
        Chưa có đánh giá nào.
      </Typography>
    );

  return (
    <Stack spacing={2}>
      {reviews.map((r: IReview) => (
        <Review key={r.date} {...r} />
      ))}
    </Stack>
  );
};

export default Reviews;
