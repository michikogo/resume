import React from "react";

import Hexagon from "react-hexagon";
import { Col, Row } from "react-bootstrap";

const FourComb = () => {
  return (
    <Row style={{ marginTop: "-15px" }}>
      <Col sm={3} style={{ padding: "0px 1vh" }}>
        <Hexagon
          style={{ stroke: "#42873f" }}
          backgroundImage="img/red-panda.jpg"
          href="http://espen.codes/"
        />
      </Col>
      <Col sm={3} style={{ padding: "0px 1vh" }}>
        <Hexagon
          style={{ stroke: "#42873f" }}
          backgroundImage="img/red-panda.jpg"
          href="http://espen.codes/"
        />
      </Col>

      <Col sm={3} style={{ padding: "0px 1vh" }}>
        <Hexagon
          style={{ stroke: "#42873f" }}
          backgroundImage="img/red-panda.jpg"
          href="http://espen.codes/"
        />
      </Col>
      <Col sm={3} style={{ padding: "0px 1vh" }}>
        <Hexagon
          style={{ stroke: "#42873f" }}
          backgroundImage="img/red-panda.jpg"
          href="http://espen.codes/"
        />
      </Col>
    </Row>
  );
};

export default FourComb;
