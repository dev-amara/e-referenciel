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
      element: <Navigate to="/dashboard/app" replace />,
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
            { element: <ReferentialList />, index: true },
            { path: ':title', element: <Referential /> },
          ],
        },
        // engagement
        {
          path: 'engagement',
          children: [
            { element: <EngagementList />, index: true },
            { path: ':title', element: <Engagement /> },
          ],
        },
        // monetics
        {
          path: 'monetics',
          children: [
            { element: <MoneticList />, index: true },
            { path: ':title', element: <Monetic /> },
          ],
        },
        // cash_management
        {
          path: 'cash_management',
          children: [
            { element: <CashManagementList />, index: true },
            { path: ':title', element: <CashManagement /> },
          ],
        },
        // canals_conformity
        {
          path: 'canals_conformity',
          children: [
            { element: <CanalsConformityList />, index: true },
            { path: ':title', element: <CanalsConformity /> },
          ],
        },
      ],
    },
  ]);
}

// Dashboard
const Home = Loadable(lazy(() => import('../pages/Home')));

const ReferentialList = Loadable(lazy(() => import('../pages/referential/ReferentialList')));
const Referential = Loadable(lazy(() => import('../pages/referential/Referential')));

const EngagementList = Loadable(lazy(() => import('../pages/engagement/EngagementList')));
const Engagement = Loadable(lazy(() => import('../pages/engagement/Engagement')));

const MoneticList = Loadable(lazy(() => import('../pages/monetics/MoneticList')));
const Monetic = Loadable(lazy(() => import('../pages/monetics/Monetic')));

const CashManagementList = Loadable(lazy(() => import('../pages/cash-management/CashManagementList')));
const CashManagement = Loadable(lazy(() => import('../pages/cash-management/CashManagement')));

const CanalsConformityList = Loadable(lazy(() => import('../pages/canals-conformity/CanalsConformityList')));
const CanalsConformity = Loadable(lazy(() => import('../pages/canals-conformity/CanalsConformity')));

const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// Auth
const Login = Loadable(lazy(() => import('../pages/Login')));
