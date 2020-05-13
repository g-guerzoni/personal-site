import React from "react";

import palette from "constants/palette";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  stripe: { height: 64, backgroundColor: palette["highlight"] },
});

function Stripe({ children }) {
  const classes = styles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.stripe}
    >
      <Typography color="primary" align="center">
        {children}
      </Typography>
    </Grid>
  );
}

export default Stripe;
