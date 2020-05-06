import React from "react";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { notificationSetMessage } from "redux/actions/notificationAction";

import If from "components/If";
import Grid from "@material-ui/core/Grid";
import Button from "components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "components/inputs/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import palette from "constants/palette";

const styles = makeStyles({
  content: {
    padding: 10,
  },
  button: {
    margin: "0 5px",
  },
  error: { color: palette["error"] },
});

const Home = ({ notificationSetMessage }) => {
  const classes = styles();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [registredEmails, setRegistredEmails] = React.useState([]);

  const subscribe = () => {
    if (registredEmails.includes(email)) {
      setError(true);
      return notificationSetMessage("Email already registered", "warning");
    } else if (isEmail(email)) {
      setError(false);
      setRegistredEmails([...registredEmails, email]);
      return notificationSetMessage("Email registered successfully", "success");
    }

    setError(true);
    return notificationSetMessage("Invalid email", "error");
  };

  return (
    <Grid className={classes.content}>
      <Typography variant="h1">Newsletter (fake)</Typography>
      <Typography variant="body1">
        Insert your email to receive updates
      </Typography>
      <Grid container alignItems="center">
        <Grid>
          <TextField
            label="Email"
            error={error}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ "data-testid": "home-input-email" }}
          ></TextField>
        </Grid>

        <Button
          data-testid="home-btn-subscribe"
          className={classes.button}
          onClick={subscribe}
        >
          Subscribe
        </Button>
      </Grid>
      <If condition={error}>
        <Typography className={classes.error} data-testid="home-error-message">
          Invalid email
        </Typography>
      </If>
    </Grid>
  );
};

export default connect(null, { notificationSetMessage })(Home);
