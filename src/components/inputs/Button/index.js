import React from "react";
import PropTypes from "prop-types";

import patelle from "constants/palette";

import Loading from "components/Loading";
import MuiButton from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  button: {
    color: (props) =>
      props.color === "primary" ? patelle["secondary"] : patelle["primary"],
    backgroundColor: (props) => patelle[props.color] || patelle["secondary"],
    fontWeight: "bold",
    height: 40,
    minWidth: 95,
    maxWidth: 180,
  },
});

function ButtonComponent({ loading, disabled, children, color, onClick }) {
  const classes = styles({ color });

  return (
    <MuiButton
      variant="contained"
      onClick={disabled || loading ? () => {} : onClick}
      className={classes.button}
    >
      {loading ? (
        <Loading color={color === "primary" ? "secondary" : "primary"} />
      ) : (
        children
      )}
    </MuiButton>
  );
}

function Button({ href, download, ...rest }) {
  if (href) {
    return (
      <Link href={href} download={download} underline="none" target="_blanck">
        <ButtonComponent {...rest} />
      </Link>
    );
  }

  return <ButtonComponent {...rest} />;
}

ButtonComponent.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  loading: false,
  disabled: false,
  color: "primary",
  button: () => {},
};

export default Button;
