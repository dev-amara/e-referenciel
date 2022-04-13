import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
import { PATH_AFTER_LOGIN } from './paths';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/auth/login" replace />,
      index: true,
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
    // Dashboard
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <Home /> },
        { path: 'referential', element: <Referential /> },
        { path: 'engagement', element: <Engagement /> },
        { path: 'monetics', element: <Monetics /> },
        { path: 'cash_management', element: <CashManagement /> },
        { path: 'canals_conformity', element: <CanalsConformity /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const Home = Loadable(lazy(() => import('../pages/Home')));
const Referential = Loadable(lazy(() => import('../pages/Referential')));
const Engagement = Loadable(lazy(() => import('../pages/Engagement')));
const Monetics = Loadable(lazy(() => import('../pages/Monetics')));
const CashManagement = Loadable(lazy(() => import('../pages/CashManagement')));
const CanalsConformity = Loadable(lazy(() => import('../pages/CanalsConformity')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// Auth
const Login = Loadable(lazy(() => import('../pages/Login')));
