import React from "react";
import PropTypes from "prop-types";

import MuiCard from "@material-ui/core/Card";

import pallete from "constants/palette";

import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  card: {
    maxWidth: 440,
    marginBottom: 15,
    height: 195,
    backgroundColor: pallete["secondary"],
    "& .MuiCardActions-root": { padding: 16 },
  },
});

function Card({ children }) {
  const classes = styles();
  return <MuiCard classes={{ root: classes.card }}>{children}</MuiCard>;
}

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
