import { Stack, Typography } from "@mui/material";

const Row = ({ label, value }: { label: string; value: string | number }) => (
  <Stack direction="row" spacing={1}>
    <Typography variant="body2" sx={{ minWidth: 140, color: "text.secondary" }}>
      {label}
    </Typography>
    <Typography variant="body2">{String(value ?? "—")}</Typography>
  </Stack>
);
export default Row;
