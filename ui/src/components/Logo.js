import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
//
import SGABSLogo from "../assets/sgbabs.jpeg";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
};

export default function Logo({ disabledLink = false }) {


  const logo = (
      <img src={SGABSLogo} alt="SGABSLogo"/>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
