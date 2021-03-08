import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import LoginPage from '../components/Authentication/LoginPage';
import SignUp from '../components/Authentication/SignUp';





function RouteConfig() {
    return (
        <>
            <Router>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/signup" exact component={SignUp} />

            </Router>
        </>
    );
}

export default RouteConfig;
