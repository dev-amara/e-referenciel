// @mui
import {Container, Grid} from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import {AppWelcome} from "../sections/@dashboard/app";

// ----------------------------------------------------------------------

export default function Home() {
  const { themeStretch } = useSettings();

  return (
      <Page title="General: App">
          <Container maxWidth={themeStretch ? false : 'xl'}>
              <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                      <AppWelcome displayName={'Kouakou Wilfried'} />
                  </Grid>

              </Grid>
          </Container>
      </Page>
  );
}
