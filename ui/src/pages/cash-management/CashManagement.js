// @mui
import { Box, Card, Container, Typography } from '@mui/material';
// hooks
import { useParams } from 'react-router-dom';
import { sentenceCase } from 'change-case';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { PATH_DASHBOARD } from '../../routes/paths';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { SkeletonProcedureItem } from '../../components/skeleton';

// ----------------------------------------------------------------------

export default function CashManagement() {
  const { themeStretch } = useSettings();

  const { title } = useParams();

  return (
    <Page title="Cash Management: Details">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Référentiel Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Cash Management', href: PATH_DASHBOARD.cashManagement.root },
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

        {!title && <SkeletonProcedureItem />}
      </Container>
    </Page>
  );
}
