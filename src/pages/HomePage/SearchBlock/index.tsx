import { Button, Stack, TextField } from "@mui/material";
import type { ChangeEvent, FormEvent } from "react";
interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  keyword: string;
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBlock: React.FC<Props> = ({
  handleSubmit,
  keyword,
  handleChangeSearch,
}) => {
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
