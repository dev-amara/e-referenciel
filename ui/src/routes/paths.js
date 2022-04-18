// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

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
    view: (title) => path(ROOTS_DASHBOARD, `/referential/${title}`),
  },
  engagement: {
    root: path(ROOTS_DASHBOARD, '/engagement'),
    view: (title) => path(ROOTS_DASHBOARD, `/engagement/${title}`),
  },
  monetics: {
    root: path(ROOTS_DASHBOARD, '/monetics'),
    view: (title) => path(ROOTS_DASHBOARD, `/monetics/${title}`),
  },
  cashManagement: {
    root: path(ROOTS_DASHBOARD, '/cash_management'),
    view: (title) => path(ROOTS_DASHBOARD, `/cash_management/${title}`),
  },
  canalsConformity: {
    root: path(ROOTS_DASHBOARD, '/canals_conformity'),
    view: (title) => path(ROOTS_DASHBOARD, `/canals_conformity/${title}`),
  },
};

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'
