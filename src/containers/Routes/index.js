import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Loading from "components/Loading";
import Grid from "@material-ui/core/Grid";
import SnackBar from "components/SnackBar";

const ComponentLoading = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Loading full colored height="80px" width="80px" />
  </Grid>
);

const Home = React.lazy(() => import("containers/Home"));
const Error404 = React.lazy(() => import("containers/Errors/error404"));

const Routes = () => (
  <React.Suspense fallback={<ComponentLoading />}>
    <Router>
      <SnackBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={Error404} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </React.Suspense>
);

export default Routes;
