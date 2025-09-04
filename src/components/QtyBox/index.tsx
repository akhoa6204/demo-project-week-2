import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField } from "@mui/material";

const QtyBox = ({
  id,
  quantity = 1,
  handleChangeQuantity,
}: {
  quantity: number;
  handleChangeQuantity: (id: number, newQty: number) => void;
  id: number;
}) => {
  return (
    <Box sx={{ width: "fit-content" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <IconButton onClick={() => handleChangeQuantity(id, quantity - 1)}>
          <Remove />
        </IconButton>

        <TextField
          type="text"
          size="small"
          value={quantity}
          slotProps={{
            input: {
              sx: {
                "& .MuiInputBase-input": {
                  textAlign: "center",
                },
              },
            },
          }}
          sx={{
            width: 60,
            "& fieldset": { border: "none" },
            borderRight: "1px solid #ccc",
            borderLeft: "1px solid #ccc",
            borderColor: "divider",
          }}
        />

        <IconButton onClick={() => handleChangeQuantity(id, quantity + 1)}>
          <Add />
        </IconButton>
      </Stack>
    </Box>
  );
};
export default QtyBox;
