// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs";
import {PATH_DASHBOARD} from "../routes/paths";

// ----------------------------------------------------------------------

export default function Monetics() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Monétique">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
            heading="Liste Cash Management"
            links={[
              { name: 'App', href: PATH_DASHBOARD.root },
              {
                name: 'Monétique',
                href: PATH_DASHBOARD.monetics.root,
              },
              { name: 'Liste' },
            ]}
        />

      </Container>
    </Page>
  );
}
