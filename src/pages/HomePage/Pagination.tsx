import { Button, Stack, Typography } from "@mui/material";
interface Props {
  currentPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}
const Pagination: React.FC<Props> = ({
  currentPage,
  handlePreviousPage,
  handleNextPage,
  canGoPrevious,
  canGoNext,
}) => {
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
