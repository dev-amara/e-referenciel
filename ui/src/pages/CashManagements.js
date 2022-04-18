// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import { PATH_DASHBOARD } from '../routes/paths';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { ResolveCashManagementCard } from '../sections/@dashboard/resolve';
import { SkeletonResolveItem } from '../components/skeleton';

// ----------------------------------------------------------------------

const CASH_MANAGEMENTS = [
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

export default function CashManagements() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Cash Management">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Liste des demandes Cash Management"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Cash Management',
              href: PATH_DASHBOARD.cashManagement.root,
            },
            { name: 'Liste' },
          ]}
        />

        <Box container spacing={3}>
          {CASH_MANAGEMENTS.map((referential) =>
            referential ? (
              <Grid key={referential.id} item xs={12} sm={12}>
                <ResolveCashManagementCard referential={referential} />
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
