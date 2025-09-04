import { Box, Typography } from "@mui/material";

const Empty = () => {
  return (
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
  );
};
export default Empty;
