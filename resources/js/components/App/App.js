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
import Dashboard from "../Dashboard/";
import Loaded from "../Loaded";
import NavBar from "../NavBar";

function App({ user }) {
    const { loggedIn } = user;
    return (
        <Router>
            <Fragment>
                <div className="App">
                    <header className="App-header">
                        <NavBar />
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
                        <Loaded>
                            <Dashboard />
                        </Loaded>
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
