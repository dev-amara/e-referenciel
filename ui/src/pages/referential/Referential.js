import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
// @mui
import { Box, Container, Grid, Link, Paper, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { getReferential } from '../../_mock/_referentials';
import { SkeletonProcedureItem } from '../../components/skeleton';
import TextMaxLine from '../../components/TextMaxLine';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

export default function Referential() {
  const { themeStretch } = useSettings();

  const isDesktop = useResponsive('up', 'md');

  const { title } = useParams();

  const _SubReferential = getReferential(sentenceCase(title)).subProcedures;

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
          {_SubReferential.map(({ link, name }, index) =>
            link ? (
              <Grid key={index} item xs={12} sm={12}>
                <Paper sx={{ mx: 1.5, mb: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
                  <Stack spacing={2.5} sx={{ p: 3, pb: 2.5 }}>
                    <Link href={link} target="_blank" rel="noreferrer">
                      <TextMaxLine variant={isDesktop ? 'h5' : 'subtitle2'} line={2} persistent>
                        {sentenceCase(name)}
                      </TextMaxLine>
                    </Link>
                  </Stack>
                </Paper>
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
