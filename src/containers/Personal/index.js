import React from "react";

import palette from "constants/palette";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import PublicIcon from "@material-ui/icons/Public";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = makeStyles({
  content: { paddingTop: "4em" },
  balloon: {
    width: 110,
    height: 36,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    backgroundColor: palette["highlight"],
  },
  personalData: {
    margin: "15px 0",
  },
  roleText: {
    color: palette["highlight"],
  },
  icons: { margin: "0 10px 10px 0" },
  avatar: {
    height: 350,
    width: 350,
    border: "10px solid " + palette["highlight"],
  },
});

function Personal() {
  const classes = styles();

  return (
    <Grid container justify="space-around" className={classes.content}>
      <Grid item container xs={12} md={6} direction="column" justify="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.balloon}
        >
          <Typography color="primary" variant="body1">
            Hey, I'm
          </Typography>
        </Grid>
        <Grid className={classes.personalData}>
          <Typography color="primary" variant="h2">
            Guilherme
          </Typography>
          <Typography color="primary" variant="h3">
            Guercione B. Vecino
          </Typography>
          <Typography variant="h5" className={classes.roleText}>
            Javascript Developer
          </Typography>
        </Grid>
        <Grid className={classes.personalData}>
          <Grid container>
            <PublicIcon color="primary" className={classes.icons} />
            <Typography color="primary" variant="body1">
              Brazilian
            </Typography>
          </Grid>
          <Grid container>
            <LocationOnIcon color="primary" className={classes.icons} />
            <Typography color="primary" variant="body1">
              Poland, Kraków
            </Typography>
          </Grid>
          <Grid container>
            <EmailIcon color="primary" className={classes.icons} />
            <Typography color="primary" variant="body1">
              guilherme.vecino@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={6} justify="flex-end">
        <Avatar
          alt="Guilherme Vecino"
          src="/images/avatar/guilherme-vecino.jpg"
          className={classes.avatar}
        />
      </Grid>
    </Grid>
  );
}

export default Personal;
