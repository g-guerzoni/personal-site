import React from "react";
import PropTypes from "prop-types";

import MuiChip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import palette from "constants/palette";

const styles = makeStyles({
  chip: {
    margin: "0 3px 5px 0",
    color: (props) => palette[props.color] || palette["primary"],
    borderColor: (props) => palette[props.color] || palette["highlight"],
  },
});

function Chip({ color, ...rest }) {
  const classes = styles({ color });
  return <MuiChip variant="outlined" className={classes.chip} {...rest} />;
}

Chip.propTypes = {
  color: PropTypes.string,
};

Chip.defaultProps = {
  color: "hightlight",
};

export default Chip;
