import React from "react";

import { Nav, ListGroup, } from "react-bootstrap";
import { Link } from 'react-router-dom';

const VerticalNav = () => {
  return (
    <>
      <Nav className="flex-column" >
        <ListGroup variant="flush">
          <ListGroup.Item><Link style={{ textDecoration: 'none' }} to="/category">Category</Link></ListGroup.Item>
          <ListGroup.Item><Link style={{ textDecoration: 'none' }} to="/stocks">Stocks</Link></ListGroup.Item>
          <ListGroup.Item><Link style={{ textDecoration: 'none' }} to="/cart">Cart</Link></ListGroup.Item>
        </ListGroup>
      </Nav>
    </>
  );
};

export default VerticalNav;
