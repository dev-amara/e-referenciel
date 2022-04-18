import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
// @mui
import { Box, Card, Container, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { SkeletonResolveItem } from '../components/skeleton';

// ----------------------------------------------------------------------

export default function Monetic() {
  const { themeStretch } = useSettings();

  const { title } = useParams();

  return (
    <Page title="Monétique: Details">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Monétique Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Monétique', href: PATH_DASHBOARD.monetics.root },
            { name: sentenceCase(title) },
          ]}
        />

        {title && (
          <Card>
            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ mb: 5 }}>
                {sentenceCase(title)}
              </Typography>
            </Box>
          </Card>
        )}

        {!title && <SkeletonResolveItem />}
      </Container>
    </Page>
  );
}
