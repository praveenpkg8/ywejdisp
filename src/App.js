import React from "react";
import { Row, Col } from "react-bootstrap";

import RouteConfig from "./RouteConfig/RouteConfig";
import VerticalNav from "./components/VerticalNav";

function App() {
  return (
    <>
      <Row>
        <Col sm={2}>
          <VerticalNav />
        </Col>
        <Col sm={10}>
          <RouteConfig />
        </Col>
      </Row>
    </>
  );
}

export default App;
