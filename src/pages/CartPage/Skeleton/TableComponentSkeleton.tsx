import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
  Stack,
} from "@mui/material";

const RowSkeleton = () => {
  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Skeleton variant="circular" width={18} height={18} />
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} alignItems="center">
          <Skeleton
            variant="rectangular"
            width={56}
            height={56}
            sx={{ borderRadius: 1 }}
          />
          <Skeleton variant="text" width="70%" />
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={1} justifyContent="center">
          <Skeleton variant="text" width={80} />
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton
            variant="rectangular"
            width={28}
            height={28}
            sx={{ borderRadius: 1 }}
          />
          <Skeleton variant="text" width={24} />
          <Skeleton
            variant="rectangular"
            width={28}
            height={28}
            sx={{ borderRadius: 1 }}
          />
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={1} justifyContent="center">
          <Skeleton variant="circular" width={24} height={24} />
        </Stack>
      </TableCell>
    </TableRow>
  );
};

const TableComponentSkeleton = ({ rows = 3 }: { rows?: number }) => {
  return (
    <Table>
      <TableHead sx={{ bgcolor: "#f3f2f2ff" }}>
        <TableRow>
          <TableCell>
            <Stack direction="row" justifyContent="center">
              <Skeleton variant="circular" width={18} height={18} />
            </Stack>
          </TableCell>
          <TableCell
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Stack direction="row" justifyContent="center">
              <Skeleton variant="text" width={120} />
            </Stack>
          </TableCell>
          <TableCell
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Stack direction="row" justifyContent="center">
              <Skeleton variant="text" width={80} />
            </Stack>
          </TableCell>
          <TableCell
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Stack direction="row" justifyContent="center">
              <Skeleton variant="text" width={100} />
            </Stack>
          </TableCell>
          <TableCell align="center">
            <Stack direction="row" justifyContent="center">
              <Skeleton variant="circular" width={24} height={24} />
                </Stack>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: rows }).map((_, i) => (
          <RowSkeleton key={i} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponentSkeleton;
