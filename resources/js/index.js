import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import persistState from "redux-localstorage";
import { userReducer, TeamReducer } from "./data/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "../sass/app.scss";
import App from "./components/App";

let rootReducer = combineReducers({
    user: userReducer,
    team: logReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(persistState(), applyMiddleware(thunk))
);

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
