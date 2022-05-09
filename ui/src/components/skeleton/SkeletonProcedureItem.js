// @mui
import { Skeleton, Grid } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonProcedureItem() {
  return (
    <Grid item xs={12} sm={12}>
      <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
    </Grid>
  );
}
