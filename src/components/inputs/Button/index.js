import React from "react";
import PropTypes from "prop-types";

import patelle from "constants/palette";

import Loading from "components/Loading";
import MuiButton from "@material-ui/core/Button";

const Button = ({ loading, disabled, children, color, onClick, ...rest }) => {
  return (
    <MuiButton
      variant="contained"
      style={{
        color:
          color === "secondary" ? patelle["primary"] : patelle["secondary"],
        backgroundColor: patelle[color],
        fontWeight: "bold",
        height: 40,
        minWidth: 95,
      }}
      onClick={disabled || loading ? () => {} : onClick}
      {...rest}
    >
      {loading ? (
        <Loading color={color === "primary" ? "secondary" : "primary"} />
      ) : (
        children
      )}
    </MuiButton>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  color: "primary",
};

export default Button;
