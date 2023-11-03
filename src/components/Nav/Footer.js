import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <h5 style={{ color: "#1881f0" }}>Contact Us</h5>
            </Link>

            <LinkedinOutlined />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
