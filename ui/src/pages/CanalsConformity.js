// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs";
import {PATH_DASHBOARD} from "../routes/paths";

// ----------------------------------------------------------------------

export default function CanalsConformity() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Canaux & Conformité">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
            heading="Liste Canaux & Conformité"
            links={[
              { name: 'App', href: PATH_DASHBOARD.root },
              {
                name: 'Canaux & Conformité',
                href: PATH_DASHBOARD.canalsConformity.root,
              },
                { name: 'Liste' },
            ]}
        />


      </Container>
    </Page>
  );
}
