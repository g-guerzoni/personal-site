import React from "react";
import PropTypes from "prop-types";

function If({ children, condition }) {
  if (condition && children) return children;
  return <div />;
}

If.propTypes = {
  children: PropTypes.node.isRequired,
  condition: PropTypes.bool,
};

If.defaultProps = {
  condition: false,
};

export default If;
