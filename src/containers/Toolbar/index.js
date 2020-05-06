import React from "react";

import palette from "constants/palette";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
// import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import MuiToolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  github: {},
  link: {
    "&:hover": {
      transition: "color 0.5s",
      color: palette["highlight"],
    },
  },
});

function Toolbar() {
  const classes = styles();
  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="md">
        <MuiToolbar>
          <Grid item xs={5}>
            <IconButton edge="end" aria-label="github">
              <GitHubIcon color="primary" />
            </IconButton>
          </Grid>
          {/* <IconButton edge="start" aria-label="menu">
          <MenuIcon color="primary" />
        </IconButton> */}
          <Grid
            item
            xs={7}
            container
            justify="space-around"
            alignItems="center"
          >
            <Link
              component="button"
              variant="h6"
              underline="none"
              className={classes.link}
            >
              HOME
            </Link>
            <Link
              component="button"
              variant="h6"
              underline="none"
              className={classes.link}
            >
              ABOUT
            </Link>
            <Link
              component="button"
              variant="h6"
              underline="none"
              className={classes.link}
            >
              SKILLS
            </Link>
            <Link
              component="button"
              variant="h6"
              underline="none"
              className={classes.link}
            >
              EXPERIENCES
            </Link>
            <Link
              component="button"
              variant="h6"
              underline="none"
              className={classes.link}
            >
              CONTACT
            </Link>
          </Grid>
        </MuiToolbar>
      </Container>
    </AppBar>
  );
}

export default Toolbar;
