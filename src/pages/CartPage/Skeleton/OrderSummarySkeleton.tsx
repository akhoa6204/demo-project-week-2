import { Box, Button, Divider, Skeleton, Stack } from "@mui/material";

const OrderSummarySkeleton = () => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: 2.5,
      }}
    >
      <Skeleton
        variant="text"
        width={120}
        height={28}
        sx={{ mx: "auto", mb: 1.5 }}
      />

      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Skeleton variant="text" width={140} />
        <Skeleton variant="text" width={32} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={80} />
      </Stack>

      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={80} />
      </Stack>

      <Stack direction="row" justifyContent="space-between" mb={1.5}>
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" width={60} />
      </Stack>

      <Divider sx={{ my: 1.5 }} />

      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={120} height={30} />
      </Stack>

      <Button variant="contained" fullWidth size="large" disabled>
        <Skeleton variant="text" width="100%" />
      </Button>
    </Box>
  );
};

export default OrderSummarySkeleton;
