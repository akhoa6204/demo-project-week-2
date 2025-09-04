import { Box, Grid, Rating, Skeleton, Stack, Typography } from "@mui/material";

const SectionHeaderSkeleton = () => (
  <Box sx={{ bgcolor: "#f3f2f2ff", px: 2, py: 1, mb: 3 }}>
    <Typography variant="h5">
      <Skeleton width={160} />
    </Typography>
  </Box>
);

const GallerySkeleton = () => (
  <Box>
    <Skeleton variant="rectangular" height={420} sx={{ mb: 2 }} />
    <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} variant="rectangular" width={84} height={84} />
      ))}
    </Stack>
  </Box>
);

const InfoPanelSkeleton = () => (
  <Stack spacing={2}>
    <Skeleton variant="text" width="60%" height={44} />
    <Skeleton variant="text" width="40%" />
    <Skeleton variant="text" width="30%" />
    <Stack direction="row" spacing={2} alignItems="center">
      <Skeleton variant="rounded" width={120} height={40} />
      <Skeleton variant="rounded" width={120} height={40} />
    </Stack>
    <Skeleton variant="rectangular" height={120} />
  </Stack>
);

const SpecsSkeleton = () => (
  <Stack spacing={1.25} sx={{ px: 2 }}>
    {Array.from({ length: 7 }).map((_, i) => (
      <Stack key={i} direction="row" spacing={2} alignItems="center">
        <Skeleton width={140} />
        <Skeleton width="40%" />
      </Stack>
    ))}
  </Stack>
);

const DescriptionSkeleton = () => (
  <Box sx={{ px: 2 }}>
    <Skeleton variant="text" width="90%" />
    <Skeleton variant="text" width="95%" />
    <Skeleton variant="text" width="80%" />
  </Box>
);

const RatingSummarySkeleton = () => (
  <Grid
    container
    sx={{
      bgcolor: "#f5faffff",
      border: "1px solid #71b0f0ff",
      px: 2,
      py: 1,
      mb: 3,
      height: 144,
    }}
  >
    <Grid size={3} display="flex" justifyContent="center" alignItems="center">
      <Stack alignItems="center" spacing={1}>
        <Skeleton variant="text" width={120} height={36} />
        {/* chỉ để giữ layout */}
        <Rating value={0} readOnly />
      </Stack>
    </Grid>
  </Grid>
);

const ReviewItemSkeleton = () => (
  <Box sx={{ px: 2, pb: 2, borderBottom: "1px solid", borderColor: "divider" }}>
    <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
      <Skeleton variant="rounded" width={80} height={24} />
      <Skeleton variant="text" width={120} />
      <Skeleton variant="text" width={80} />
    </Stack>
    <Skeleton variant="text" width="95%" />
    <Skeleton variant="text" width="80%" />
  </Box>
);

const ReviewsSkeleton = () => (
  <Stack spacing={2}>
    {Array.from({ length: 3 }).map((_, i) => (
      <ReviewItemSkeleton key={i} />
    ))}
  </Stack>
);

const MainContentSkeleton = () => {
  return (
    <Grid container spacing={4}>
      {/* Gallery */}
      <Grid size={{ xs: 12, md: 5 }}>
        <GallerySkeleton />
      </Grid>

      {/* InfoPanel */}
      <Grid size={{ xs: 12, md: 7 }}>
        <InfoPanelSkeleton />
      </Grid>

      {/* Specs */}
      <Grid size={12} mt={1}>
        <SectionHeaderSkeleton />
        <SpecsSkeleton />
      </Grid>

      {/* Description */}
      <Grid size={12} mt={1}>
        <SectionHeaderSkeleton />
        <DescriptionSkeleton />
      </Grid>

      {/* Reviews */}
      <Grid size={12} mt={1}>
        <SectionHeaderSkeleton />
        <RatingSummarySkeleton />
        <ReviewsSkeleton />
      </Grid>
    </Grid>
  );
};

export default MainContentSkeleton;
