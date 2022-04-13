// components
import SvgIconStyle from '../../../components/SvgIconStyle';
import {PATH_DASHBOARD} from "../../../routes/paths";

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  referential: getIcon('setting-line'),
  engagement: getIcon('hand-shake'),
  monetics: getIcon('insert-card'),
  cash_management: getIcon('bank-finance-loan'),
  canals_conformity: getIcon('digital-banking'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Choix de la BL',
    items: [
      { title: 'Référentiel', path: PATH_DASHBOARD.general.referential, icon: ICONS.referential },
      { title: 'Engagement', path: PATH_DASHBOARD.general.engagement, icon: ICONS.engagement },
      { title: 'Monétique', path: PATH_DASHBOARD.general.monetics, icon: ICONS.monetics },
      { title: 'Cash Management', path: PATH_DASHBOARD.general.cash_management, icon: ICONS.cash_management },
      { title: 'Canaux & Conformité', path: PATH_DASHBOARD.general.canals_conformity, icon: ICONS.canals_conformity },
    ],
  },
];

export default sidebarConfig;
