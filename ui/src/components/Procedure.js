import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Paper, Stack } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import TextMaxLine from './TextMaxLine';

// ----------------------------------------------------------------------

Procedure.propTypes = {
  bl: PropTypes.object.isRequired,
};

export default function Procedure({ bl }) {
  const { title, path } = bl;

  return <ProcedureContent title={title} path={path} />;
}

// ----------------------------------------------------------------------

ProcedureContent.propTypes = {
  title: PropTypes.string,
  path: PropTypes.any,
};

function ProcedureContent({ title, path }) {
  const isDesktop = useResponsive('up', 'md');

  const linkTo = path.view(paramCase(title));

  return (
    <Paper sx={{ mx: 1.5, mb: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={2.5} sx={{ p: 3, pb: 2.5 }}>
        <Link to={linkTo} color="inherit" component={RouterLink}>
          <TextMaxLine variant={isDesktop ? 'h5' : 'subtitle2'} line={2} persistent>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>
    </Paper>
  );
}
