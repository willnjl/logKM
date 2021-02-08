import React, { Fragment } from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import history from "../../history";
import SignIn from "../SignIn";
import SignUp from "../SignUp/SignUp";
import axios from "../../axios";
import Dashboard from "../Dashboard/Dashboard";

function App({ user }) {
    const { loggedIn } = user;
    return (
        <Router history={history}>
            <Fragment>
                <div className="App">
                    <header className="App-header">
                        <h1>Activity Log Book</h1>
                    </header>
                </div>
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
