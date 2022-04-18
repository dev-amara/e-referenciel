// @mui
import { Box, Card, Container, Typography } from '@mui/material';
// hooks
import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../routes/paths';
import { SkeletonResolveItem } from '../components/skeleton';

// ----------------------------------------------------------------------

export default function CanalsConformitys() {
  const { themeStretch } = useSettings();

  const { title } = useParams();

  return (
    <Page title="Referential: Details">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Référentiel Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Référentiel', href: PATH_DASHBOARD.referential.root },
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
