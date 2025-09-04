import { Box, Card, CardMedia, Stack } from "@mui/material";

const Gallery = ({
  images,
  title,
  active = 0,
  handleChooseImage,
}: {
  images: string[];
  title: string;
  active: number;
  handleChooseImage: (i: number) => void;
}) => {
  const main = images[active];

  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardMedia component="img" height="420" image={main} alt={title} />
      </Card>
      <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
        {images.map((img, i) => (
          <Card
            key={i}
            sx={{
              width: 84,
              border: i === active ? "2px solid" : "1px solid",
              borderColor: i === active ? "primary.main" : "divider",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() => handleChooseImage(i)}
          >
            <CardMedia component="img" image={img} alt={`${title}-${i}`} />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
export default Gallery;
