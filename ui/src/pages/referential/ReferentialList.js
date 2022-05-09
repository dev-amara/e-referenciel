// @mui
import { Box, Container, Grid } from '@mui/material';
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { SkeletonProcedureItem } from '../../components/skeleton';
import Procedure from '../../components/Procedure';
// _mock
import { _referentials } from '../../_mock/_referentials';

// ----------------------------------------------------------------------

export default function ReferentialList() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Référentiel">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Procedures des demandes référentiel"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Référentiel',
              href: PATH_DASHBOARD.referential.root,
            },
            { name: 'Liste' },
          ]}
        />

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
          }}
        >
          {_referentials.map((referential) =>
            referential ? (
              <Grid key={referential.id} item xs={12} sm={12}>
                <Procedure bl={{ ...referential, path: PATH_DASHBOARD.referential }} />
              </Grid>
            ) : (
              <SkeletonProcedureItem />
            )
          )}
        </Box>
      </Container>
    </Page>
  );
}
