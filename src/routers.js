import React from 'react';
import { useAuth0 } from './contexts/auth0-context';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components';
import { HomeContainer } from './containers';

// page not found component will be render if got wrong url/path
const PageNotFound = () => {
  return <h1>Page Not Found</h1>
}

function Routing() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            {(isAuthenticated) ? <HomeContainer /> : ""}
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routing;