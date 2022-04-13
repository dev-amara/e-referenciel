import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { MotionContainer, varBounce } from '../components/animate';
// assets
import { PageNotFoundIllustration } from '../assets';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Non Trouvée" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                Désolé, page non trouvée !
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Désolé, nous n'avons pas pu trouver la page que vous recherchez. Peut-être avez-vous mal saisi l'URL ? Vérifiez bien
              votre orthographe.
            </Typography>

            <m.div variants={varBounce().in}>
              <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
            </m.div>

            <Button to="/" size="large" variant="contained" component={RouterLink}>
              Aller à l'accueil
            </Button>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
