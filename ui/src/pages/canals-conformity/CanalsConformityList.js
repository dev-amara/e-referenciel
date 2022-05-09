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

export default function CanalsConformityList() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Canaux & Conformité">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Liste des demandes Canaux & Conformité"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Canaux & Conformité',
              href: PATH_DASHBOARD.canalsConformity.root,
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
          {DATA.map((canalsConformity) =>
            canalsConformity ? (
              <Grid key={canalsConformity.id} item xs={12} sm={12}>
                <Procedure bl={{ ...canalsConformity, path: PATH_DASHBOARD.canalsConformity }} />
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
