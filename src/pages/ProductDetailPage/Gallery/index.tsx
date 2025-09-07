import { Box, Card, CardMedia, Stack } from "@mui/material";
import { useProductDetailContext } from "../../../hooks/product-detail/useProductDetailContext";

const Gallery = () => {
  const { images, product, activeImage, handleChooseImage } =
    useProductDetailContext();
  const main = images[activeImage];

  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          component="img"
          height="420"
          image={main}
          alt={product?.title}
        />
      </Card>
      <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
        {images.map((img, i) => (
          <Card
            key={i}
            sx={{
              width: 84,
              border: i === activeImage ? "2px solid" : "1px solid",
              borderColor: i === activeImage ? "primary.main" : "divider",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() => handleChooseImage(i)}
          >
            <CardMedia
              component="img"
              image={img}
              alt={`${product?.title}-${i}`}
            />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
export default Gallery;
