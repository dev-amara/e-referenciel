// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { SkeletonResolveItem } from '../components/skeleton';
import { ResolveReferentialCard } from '../sections/@dashboard/resolve';

// ----------------------------------------------------------------------

const REFERENTIALS = [
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

export default function Referentials() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Référentiel">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Liste des demandes Référentiel"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Référentiel',
              href: PATH_DASHBOARD.referential.root,
            },
            { name: 'Liste' },
          ]}
        />

        <Box container spacing={3}>
          {REFERENTIALS.map((referential) =>
            referential ? (
              <Grid key={referential.id} item xs={12} sm={12}>
                <ResolveReferentialCard referential={referential} />
              </Grid>
            ) : (
              <SkeletonResolveItem />
            )
          )}
        </Box>
      </Container>
    </Page>
  );
}
