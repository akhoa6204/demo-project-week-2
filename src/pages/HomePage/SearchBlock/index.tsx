import { Button, Stack, TextField } from "@mui/material";
import useHomeContext from "../../../hooks/home/useHomeContext";

const SearchBlock = () => {
  const {
    keyword,
    handleSubmit,
    handleChangeSearch,
  } = useHomeContext();
  
  return (
    <Stack
      component={"form"}
      direction={"row"}
      spacing={2}
      mb={2}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Search Products..."
        type="text"
        fullWidth
        value={keyword}
        onChange={handleChangeSearch}
      />
      <Button variant="contained" type="submit">
        find
      </Button>
    </Stack>
  );
};
export default SearchBlock;
