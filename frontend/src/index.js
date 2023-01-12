import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// import * as apiUtil from "./util/session_api_util.js"
// used for testing

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let store;
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        
        store = configureStore(preloadedState);
    
        const currentTime = Date.now() / 1000;
    
        if (decodedUser.exp < currentTime) {
          store.dispatch(logout());
          window.location.href = '/#/login';
        }
    } else {
        store = configureStore()
    }
    
    // TESTING START
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.logout
    window.store = store;
    // TESTING END

    ReactDOM.render(<Root store={store} />, root)
})