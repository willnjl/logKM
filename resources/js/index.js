import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { userReducer, logReducer } from "./data/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "../sass/app.scss";
import App from "./components/App";

let rootReducer = combineReducers({ user: userReducer, log: logReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
