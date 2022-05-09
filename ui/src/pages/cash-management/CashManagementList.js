// @mui
import { Box, Container, Grid } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { PATH_DASHBOARD } from '../../routes/paths';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
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

export default function CashManagementList() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Cash Management">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Liste des demandes Cash Management & etrangé"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Cash Management',
              href: PATH_DASHBOARD.cashManagement.root,
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
          {DATA.map((cashManagent) =>
            cashManagent ? (
              <Grid key={cashManagent.id} item xs={12} sm={12}>
                <Procedure bl={{ ...cashManagent, path: PATH_DASHBOARD.cashManagement }} />
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
