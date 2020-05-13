import React from "react";

import Chip from "components/Chip";
import Button from "components/inputs/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const styles = makeStyles({
  chips: { margin: "10px 0" },
  image: {
    "& img": {
      width: "100%",
      height: "auto",
      maxWidth: 400,
      maxHeight: 270,
    },
  },
});

function About() {
  const classes = styles();

  return (
    <Grid container justify="space-around">
      <Grid
        item
        xs={12}
        md={6}
        container
        justify="flex-start"
        alignItems="center"
        className={classes.image}
      >
        <img alt="computer" src="images/computer.png" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        container
        direction="column"
        justify="center"
        alignContent="center"
      >
        <Typography color="primary" variant="h3">
          About Me
        </Typography>
        <Typography color="primary" variant="body1">
          Beer drinker and gamer on free time, technology enthusiast currently
          working with the wonderful world of Javascript.
        </Typography>
        <Grid container justify="space-between" className={classes.chips}>
          <Chip label="HTML" />
          <Chip label="CSS" />
          <Chip label="Javascript" />

          <Chip label="React" />
          <Chip label="Redux" />
          <Chip label="Redux Saga" />

          <Chip label="Material UI" />
          <Chip label="Bootstrap" />
          <Chip label="SASS" />

          <Chip label="Node" />
          <Chip label="ExpressJS" />
          <Chip label="KnexJS" />

          <Chip label="MongoDB" />
          <Chip label="MySQL" />

          <Chip label="Jest" />
          <Chip label="Enzyme" />
          <Chip label="Supertest" />
          <Chip label="Testing Library" />
        </Grid>
        <Button
          color="highlight"
          startIcon={<CloudDownloadIcon />}
          href="assets/cv.pdf"
          download
        >
          Download My CV
        </Button>
      </Grid>
    </Grid>
  );
}

export default About;
