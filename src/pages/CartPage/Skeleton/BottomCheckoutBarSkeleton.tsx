import { Button, Skeleton, Stack } from "@mui/material";

const BottomCheckoutBarSkeleton = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Skeleton variant="circular" width={18} height={18} />
        <Skeleton variant="text" width={90} />
        <Skeleton variant="text" width={60} />
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack textAlign="right" spacing={0}>
          <Skeleton variant="text" width={100} />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={12} />
            <Skeleton variant="text" width={80} />
          </Stack>
        </Stack>
        <Button
          variant="contained"
          size="small"
          sx={{ minWidth: 120 }}
          disabled
        >
          <Skeleton variant="text" width={70} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default BottomCheckoutBarSkeleton;
