import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import type { IReview } from "../../../interface/IProduct";

const Review = ({ rating, comment, date, reviewerName }: IReview) => {
  return (
    <Box sx={{ pb: 2, borderBottom: "1px solid", borderColor: "divider" }}>
      <Stack direction={"row"} mb={1} spacing={2} alignItems={"center"}>
        <Avatar />
        <Stack>
          <Typography variant="body2" fontWeight={600}>
            {reviewerName}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {new Date(date).toLocaleDateString()}
          </Typography>
          <Rating size="small" value={rating} readOnly />
        </Stack>
      </Stack>
      <Typography variant="body1">{comment}</Typography>
    </Box>
  );
};

export default Review;
