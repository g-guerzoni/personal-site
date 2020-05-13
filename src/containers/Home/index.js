import React from "react";

import Toolbar from "containers/Toolbar";
import Personal from "containers/Personal";
import About from "containers/About";
import Github from "containers/Github";

import Stripe from "components/Stripe";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  section: { padding: "4em 0" },
});

const Home = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <Toolbar />
      <Container maxWidth="md">
        <Grid className={classes.section}>
          <Personal />
        </Grid>
        <Grid className={classes.section}>
          <About />
        </Grid>
      </Container>

      <Grid className={classes.section}>
        <Stripe>
          Did you like my profile? <b>Hire me!</b>
          <br />
          Wait! Not convinced yet? Keep scrolling :)
        </Stripe>
      </Grid>

      <Container maxWidth="md">
        <Grid className={classes.section}>
          <Github />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
