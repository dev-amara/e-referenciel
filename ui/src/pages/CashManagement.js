// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import {PATH_DASHBOARD} from "../routes/paths";
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs";
// ----------------------------------------------------------------------

export default function CashManagement() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Cash Management">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
            heading="Liste Cash Management"
            links={[
              { name: 'App', href: PATH_DASHBOARD.root },
              {
                name: 'CashManagement',
                href: PATH_DASHBOARD.cashManagement.root,
              },
              { name: 'Liste' },
            ]}
        />


      </Container>
    </Page>
  );
}
