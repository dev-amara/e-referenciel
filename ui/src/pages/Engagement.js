// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import {PATH_DASHBOARD} from "../routes/paths";
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs";

// ----------------------------------------------------------------------

export default function Engagement() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Engagement">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
            heading="Liste Engagement"
            links={[
              { name: 'App', href: PATH_DASHBOARD.root },
              {
                name: 'Engagement',
                href: PATH_DASHBOARD.engagement.root,
              },
              { name: 'Liste' },
            ]}
        />


      </Container>
    </Page>
  );
}
