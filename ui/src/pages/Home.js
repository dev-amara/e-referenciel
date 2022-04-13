// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Home() {
  const { themeStretch } = useSettings();

  return (
    <Page title="App">
      <Container maxWidth={themeStretch ? false : 'xl'}></Container>
    </Page>
  );
}
