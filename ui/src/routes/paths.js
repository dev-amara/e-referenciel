// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    referential: path(ROOTS_DASHBOARD, '/referential'),
    engagement: path(ROOTS_DASHBOARD, '/engagement'),
    monetics: path(ROOTS_DASHBOARD, '/monetics'),
    cash_management: path(ROOTS_DASHBOARD, '/cash_management'),
    canals_conformity: path(ROOTS_DASHBOARD, '/canals_conformity'),
  },
  referential: {
    root: path(ROOTS_DASHBOARD, '/referential'),
  },
  engagement: {
    root: path(ROOTS_DASHBOARD, '/engagement'),
  },
  monetics: {
    root: path(ROOTS_DASHBOARD, '/monetics'),
  },
  cashManagement: {
    root: path(ROOTS_DASHBOARD, '/cash_management'),
  },
  canalsConformity: {
    root: path(ROOTS_DASHBOARD, '/canals_conformity'),
  },
};

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'
