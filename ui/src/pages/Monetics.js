// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../routes/paths';
import { ResolveMoneticCard } from '../sections/@dashboard/resolve';
import { SkeletonResolveItem } from '../components/skeleton';

// ----------------------------------------------------------------------

const MONETICS = [
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
          heading="Liste des demandes Monetique"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Monétique',
              href: PATH_DASHBOARD.monetics.root,
            },
            { name: 'Liste' },
          ]}
        />

        <Box container spacing={3}>
          {MONETICS.map((referential) =>
            referential ? (
              <Grid key={referential.id} item xs={12} sm={12}>
                <ResolveMoneticCard referential={referential} />
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
