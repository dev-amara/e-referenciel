import PropTypes from 'prop-types';
// @mui
import { Box, Card, Container, Stack, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

const ASKS_REFERENTIAL = [
  {
    title: 'Création de fiche banque',
  },
  {
    title: 'Impossibilité de clôture de compte',
  },
  {
    title: 'Création de code opération',
  },
  {
    title: 'Création de fiche banque',
  },
  {
    title: 'Impossibilité de clôture de compte',
  },
  {
    title: 'Création de code opération',
  },
  {
    title: 'Création de fiche banque',
  },
  {
    title: 'Impossibilité de clôture de compte',
  },
  {
    title: 'Création de code opération',
  },
];

ReferentialListItem.propTypes = {
  askReferential: PropTypes.object,
};

function ReferentialListItem({ askReferential }) {
  const { title } = askReferential;

  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

export default function Referential() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Référentiel">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Liste Référentiel"
          links={[
            { name: 'App', href: PATH_DASHBOARD.root },
            {
              name: 'Référentiel',
              href: PATH_DASHBOARD.referential.root,
            },
            { name: 'Liste' },
          ]}
        />

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              lg: 'repeat(1, 1fr)',
            },
          }}
        >
          {ASKS_REFERENTIAL.map((askReferential, index) => (
            <ReferentialListItem key={index} askReferential={askReferential} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
