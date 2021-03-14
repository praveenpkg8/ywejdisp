import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

import Dashboard from '../components/Dashboard';
import Stocks from '../components/Stock/Stock';
import Category from '../components/Category/Category';
import Cart from '../components/Cart/Cart';


import LoginPage from '../components/Authentication/LoginPage';
import SignUp from '../components/Authentication/SignUp';
import VerticalNav from "../components/VerticalNav";





function RouteConfig() {
    return (
        <>
            <Router>
                <Row>
                    <Col sm={2}>
                        <VerticalNav />
                    </Col>
                    <Col sm={10}>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/stocks" exact component={Stocks} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/category" exact component={Category} />
                        <Route path="/cart" exact component={Cart} />

                    </Col>
                </Row>
            </Router>
        </>
    );
}

export default RouteConfig;
