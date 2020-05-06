import React from "react";

import palette from "constants/palette";

import MUITextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  color: {
    color: (props) => palette[props.color] || palette["primary"],
  },
});

const TextField = ({ color, error, "data-testid": dataTestid, ...rest }) => {
  const classes = styles({ color });

  return (
    <MUITextField
      variant="outlined"
      size="small"
      color={color || "primary"}
      style={{ margin: "10px 0" }}
      InputLabelProps={{ className: classes.color }}
      inputProps={{
        className: classes.color,
        "data-testid": dataTestid,
        error: String(error),
      }}
      error={error}
      {...rest}
    />
  );
};

TextField.propTypes = {};

TextField.defaultProps = {};

export default TextField;
