import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Card, CardContent } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import TextMaxLine from '../../../components/TextMaxLine';

// ----------------------------------------------------------------------

ResolveCashManagementCard.propTypes = {
  referential: PropTypes.object.isRequired,
};

export default function ResolveCashManagementCard({ referential }) {
  const { title } = referential;

  return (
    <Card>
      <ResolveContent title={title} />
    </Card>
  );
}

// ----------------------------------------------------------------------

ResolveContent.propTypes = {
  title: PropTypes.string,
};

export function ResolveContent({ title }) {
  const isDesktop = useResponsive('up', 'md');

  const linkTo = PATH_DASHBOARD.cashManagement.view(paramCase(title));

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
      }}
    >
      <Link to={linkTo} color="inherit" component={RouterLink}>
        <TextMaxLine variant={isDesktop ? 'h5' : 'subtitle2'} line={2} persistent>
          {title}
        </TextMaxLine>
      </Link>
    </CardContent>
  );
}
