import React from "react";
import PropTypes from "prop-types";
import palette from "constants/palette";

import { connect } from "react-redux";
import { notificationClearMessage } from "redux/actions/notificationAction";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const types = { success: "success", warning: "warning", error: "error" };

const SnackBar = ({ active, type, message, notificationClearMessage }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    return notificationClearMessage();
  };

  return (
    <Snackbar
      data-testid="snackbar"
      open={active}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <SnackbarContent
        style={{
          backgroundColor: palette[types[type.toLowerCase()]],
        }}
        message={<span>{message}</span>}
        action={
          <Button onClick={handleClose} style={{ color: "white" }}>
            Fechar
          </Button>
        }
      />
    </Snackbar>
  );
};

SnackBar.propTypes = {
  active: PropTypes.bool.isRequired,
  type: PropTypes.string,
  message: PropTypes.string,
  notificationClearMessage: PropTypes.func.isRequired,
};

SnackBar.defaultProps = {
  type: "success",
  message: "No message defined",
};

const mapSateToProps = (store) => {
  const { type, active, message } = store?.notification;
  return { type, active, message };
};

export default connect(mapSateToProps, {
  notificationClearMessage,
})(SnackBar);
