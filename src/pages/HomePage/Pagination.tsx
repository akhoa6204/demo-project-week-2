import { Button, Stack, Typography } from "@mui/material";
import useHomeContext from "../../hooks/home/useHomeContext";

const Pagination = () => {
  const {
    currentPage,
    handleNextPage,
    handlePreviousPage,
    canGoPrevious,
    canGoNext,
  } = useHomeContext();
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      mt={3}
    >
      <Button
        variant="outlined"
        onClick={handlePreviousPage}
        disabled={!canGoPrevious}
      >
        Trang trước
      </Button>
      <Typography variant="body2">Trang {currentPage}</Typography>
      <Button variant="outlined" onClick={handleNextPage} disabled={!canGoNext}>
        Trang sau
      </Button>
    </Stack>
  );
};
export default Pagination;
