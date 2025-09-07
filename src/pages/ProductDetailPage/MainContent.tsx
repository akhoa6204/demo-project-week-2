import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import Gallery from "./Gallery";
import InfoPanel from "./InfoPanel";
import Specs from "./Specs";
import Reviews from "./Reviews";
import { useProductDetailContext } from "../../hooks/product-detail/useProductDetailContext";

const MainContent = () => {
  const { product } = useProductDetailContext();
  const { description, rating } = product!;
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Gallery />
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <InfoPanel />
      </Grid>

      <Grid size={12} mt={1}>
        <Box
          sx={{
            bgcolor: "#f3f2f2ff",
            px: 2,
            py: 1,
            mb: 3,
          }}
        >
          <Typography variant="h5">Thông số kỹ thuật</Typography>
        </Box>
        <Box px={2}>
          <Specs />
        </Box>
      </Grid>

      <Grid size={12} mt={1}>
        <Box
          sx={{
            bgcolor: "#f3f2f2ff",
            px: 2,
            py: 1,
            mb: 3,
          }}
        >
          <Typography variant="h5">Mô tả sản phẩm</Typography>
        </Box>
        <Box px={2}>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Grid>

      <Grid size={12} mt={1}>
        <Box
          sx={{
            bgcolor: "#f3f2f2ff",
            px: 2,
            py: 1,
            mb: 3,
          }}
        >
          <Typography variant="h5">Đánh giá</Typography>
        </Box>
        <Grid
          container
          sx={{
            bgcolor: "#f5faffff",
            border: "1px solid #71b0f0ff",
            px: 2,
            py: 1,
            mb: 3,
            height: 144,
          }}
        >
          <Grid
            size={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack justifyContent={"center"} alignContent={"center"}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#71b0f0ff",
                  textAlign: "center",
                }}
              >
                {rating.toFixed(1)} trên 5
              </Typography>
              <Rating value={rating} precision={0.1} readOnly />
            </Stack>
          </Grid>
        </Grid>
        <Box px={2}>
          <Reviews />
        </Box>
      </Grid>
    </Grid>
  );
};
export default MainContent;
