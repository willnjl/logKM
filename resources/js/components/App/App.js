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
import AddAction from "../AddAction";
import Loaded from "../Loaded";
import Settings from "../Settings";
import Copyright from "../Copyright";
import PageWrap from "../PageWrap";

function App({ user }) {
    const { loggedIn } = user;
    return (
        <Router>
            <Fragment>
                <PageWrap>
                    <Switch>
                        <Route exact path="/">
                            {!loggedIn ? (
                                <SignIn />
                            ) : (
                                <Redirect to="/dashboard" />
                            )}
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/dashboard">
                            {!loggedIn ? <Redirect to="/" /> : <Dashboard />}
                        </Route>
                        <Route exact path="/add">
                            {!loggedIn ? <Redirect to="/" /> : <AddAction />}
                        </Route>
                        <Route path="/settings">
                            {!loggedIn ? <Redirect to="/" /> : <Settings />}
                        </Route>
                    </Switch>
                    <Copyright />
                </PageWrap>
            </Fragment>
        </Router>
    );
}

export default App;
