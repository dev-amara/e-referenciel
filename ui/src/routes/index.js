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
        // referential
        {
          path: 'referential',
          children: [
            { element: <Referentials />, index: true },
            { path: ':title', element: <Referential /> },
          ],
        },
        // engagement
        {
          path: 'engagement',
          children: [
            { element: <Engagements />, index: true },
            { path: ':title', element: <Engagement /> },
          ],
        },
        // monetics
        {
          path: 'monetics',
          children: [
            { element: <Monetics />, index: true },
            { path: ':title', element: <Monetic /> },
          ],
        },
        // cash_management
        {
          path: 'cash_management',
          children: [
            { element: <CashManagements />, index: true },
            { path: ':title', element: <CashManagement /> },
          ],
        },
        // canals_conformity
        {
          path: 'canals_conformity',
          children: [
            { element: <CanalsConformitys />, index: true },
            { path: ':title', element: <CanalsConformity /> },
          ],
        },
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

const Referentials = Loadable(lazy(() => import('../pages/Referentials')));
const Referential = Loadable(lazy(() => import('../pages/Referential')));

const Engagements = Loadable(lazy(() => import('../pages/Engagements')));
const Engagement = Loadable(lazy(() => import('../pages/Engagement')));

const Monetics = Loadable(lazy(() => import('../pages/Monetics')));
const Monetic = Loadable(lazy(() => import('../pages/Monetic')));

const CashManagements = Loadable(lazy(() => import('../pages/CashManagements')));
const CashManagement = Loadable(lazy(() => import('../pages/CashManagement')));

const CanalsConformitys = Loadable(lazy(() => import('../pages/CanalsConformitys')));
const CanalsConformity = Loadable(lazy(() => import('../pages/CanalsConformity')));

const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// Auth
const Login = Loadable(lazy(() => import('../pages/Login')));
