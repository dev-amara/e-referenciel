// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import { PATH_DASHBOARD } from '../routes/paths';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { SkeletonResolveItem } from '../components/skeleton';
import { ResolveEngagementCard } from '../sections/@dashboard/resolve';

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
export default function Engagements() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Engagements">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Liste des demandes Engagements"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Engagements',
              href: PATH_DASHBOARD.engagement.root,
            },
            { name: 'Liste' },
          ]}
        />

        <Box container spacing={3}>
          {REFERENTIALS.map((referential) =>
            referential ? (
              <Grid key={referential.id} item xs={12} sm={12}>
                <ResolveEngagementCard referential={referential} />
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
