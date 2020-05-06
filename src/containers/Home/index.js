import React from "react";

import Toolbar from "containers/Toolbar";
import Personal from "containers/Personal";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  content: {},
});

const Home = () => {
  const classes = styles();
  return (
    <React.Fragment>
      <Toolbar />
      <Container maxWidth="md">
        <Personal />
      </Container>
    </React.Fragment>
  );
};

export default Home;
