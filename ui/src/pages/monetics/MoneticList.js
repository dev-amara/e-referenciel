// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../routes/paths';
import { SkeletonProcedureItem } from '../../components/skeleton';
import Procedure from '../../components/Procedure';

// ----------------------------------------------------------------------

const DATA = [
  {
    id: 1,
    title: 'Creation de fiche banque',
  },
  {
    id: 2,
    title: 'Impossibilite de cloture de compte',
  },
  {
    id: 3,
    title: 'Creation de code operation',
  },
];

// ----------------------------------------------------------------------

export default function Monetics() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Monétique">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Procedures des demandes monétique"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Monétique',
              href: PATH_DASHBOARD.monetics.root,
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
          {DATA.map((monetic) =>
            monetic ? (
              <Grid key={monetic.id} item xs={12} sm={12}>
                <Procedure bl={{ ...monetic, path: PATH_DASHBOARD.monetics }} />
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
