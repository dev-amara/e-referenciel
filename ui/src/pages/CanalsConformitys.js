// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../routes/paths';
import { ResolveCanalsConformityCard } from '../sections/@dashboard/resolve';
import { SkeletonResolveItem } from '../components/skeleton';

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

export default function CanalsConformitys() {
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

        <Box container spacing={3}>
          {REFERENTIALS.map((referential) =>
            referential ? (
              <Grid key={referential.id} item xs={12} sm={12}>
                <ResolveCanalsConformityCard referential={referential} />
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
