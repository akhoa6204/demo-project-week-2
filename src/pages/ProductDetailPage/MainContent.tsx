import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import Gallery from "./Gallery";
import InfoPanel from "./InfoPanel";
import type { IProduct } from "../../interface/IProduct";
import Specs from "./Specs";
import Reviews from "./Reviews";

const MainContent = ({
  images,
  product,
  quantity = 1,
  handleChangeQuantity,
  handleChooseImage,
  activeImage,
  handleAddToCart,
}: {
  images: string[];
  product: IProduct;
  quantity: number;
  handleChangeQuantity: (id: number, newQty: number) => void;
  handleChooseImage: (i: number) => void;
  activeImage: number;
  handleAddToCart: () => void;
}) => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Gallery
          images={images}
          title={product!.title}
          active={activeImage}
          handleChooseImage={handleChooseImage}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <InfoPanel
          product={product!}
          quantity={quantity}
          handleChangeQuantity={handleChangeQuantity}
          handleAddToCart={handleAddToCart}
        />
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
          <Specs product={product!} />
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
          <Typography variant="body1">{product!.description}</Typography>
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
                {product.rating.toFixed(1)} trên 5
              </Typography>
              <Rating value={product.rating} precision={0.1} readOnly />
            </Stack>
          </Grid>
        </Grid>
        <Box px={2}>
          <Reviews reviews={product!.reviews || []} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default MainContent;
