import React from "react";

import Card from "components/Card";
import Button from "components/inputs/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  chips: {},
});

function Github() {
  const classes = styles();

  const repos = [
    {
      title: "personal-site",
      description:
        "Personal Site - React | Redux | Saga | Material UI | Jest | Testing Library",
      github: "https://github.com/Guercione/personal-site",
      liveDemo: "http://guercione.com.br",
    },
    {
      title: "challenge-event-register",
      description:
        "Challenge - Event Register - Backend: NodeJS | ExpressJS | MongoDB - Frontend: ReactJS | Redux | Saga | Material UI",
      github: "https://github.com/guercione",
      liveDemo: "https://brainhub-frontend.herokuapp.com",
    },
    {
      title: "challenge-event-register",
      description:
        "Challenge - Event Register - Backend: NodeJS | ExpressJS | MongoDB - Frontend: ReactJS | Redux | Saga | Material UI",
      github: "https://github.com/guercione",
      liveDemo: "https://brainhub-frontend.herokuapp.com",
    },
    {
      title: "challenge-event-register",
      description:
        "Challenge - Event Register - Backend: NodeJS | ExpressJS | MongoDB - Frontend: ReactJS | Redux | Saga | Material UI",
      github: "https://github.com/guercione",
      liveDemo: "https://brainhub-frontend.herokuapp.com",
    },
  ];

  return (
    <Grid container justify="space-between">
      {repos.map((item, index) => (
        <Grid
          key={`${item.title}-${index}`}
          item
          xs={12}
          md={6}
          container
          justify="flex-end"
        >
          <Card>
            <CardContent>
              <Typography color="primary" variant="h4">
                {item.title}
              </Typography>
              <Typography color="primary" variant="body1">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={item.liveDemo} color="highlight">
                Live Demo
              </Button>
              <Button href={item.github} color="highlight">
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid container justify="flex-end">
        <Button
          color="highlight"
          startIcon={<GitHubIcon />}
          href="https://github.com/Guercione?tab=repositories"
        >
          More
        </Button>
      </Grid>
    </Grid>
  );
}

export default Github;
