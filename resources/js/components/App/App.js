import React, { Fragment } from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp/SignUp";
import Dashboard from "../Dashboard/";
import Loaded from "../Loaded";
import Settings from "../Settings";
import Copyright from "../Copyright";

function App({ user }) {
    const { loggedIn } = user;
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/">
                        {!loggedIn ? <SignIn /> : <Redirect to="/dashboard" />}
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/dashboard">
                        {!loggedIn ? (
                            <Redirect to="/" />
                        ) : (
                            <Loaded>
                                <Dashboard />
                            </Loaded>
                        )}
                    </Route>
                    {/* <Route path="/settings">
                        {!loggedIn ? (
                            <Redirect to="/" />
                        ) : (
                            <Loaded>
                                <Settings />
                            </Loaded>
                        )}
                    </Route> */}
                </Switch>
                <Copyright />
            </Fragment>
        </Router>
    );
}

export default App;
