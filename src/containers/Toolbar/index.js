import React from "react";

import palette from "constants/palette";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
// import MenuIcon from "@material-ui/icons/Menu";
import MuiToolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
          <Grid item xs={5} container>
            <Grid item xs="auto">
              <Link href="https://github.com/guercione" target="_blank">
                <IconButton edge="end" aria-label="github">
                  <GitHubIcon color="primary" />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs="auto">
              <Link
                href="https://www.linkedin.com/in/guilherme-guercione-bergmann-vecino-18219764/"
                target="_blank"
              >
                <IconButton edge="end" aria-label="github">
                  <LinkedInIcon color="primary" />
                </IconButton>
              </Link>
            </Grid>
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
              REPOS
            </Link>
          </Grid>
        </MuiToolbar>
      </Container>
    </AppBar>
  );
}

export default Toolbar;
