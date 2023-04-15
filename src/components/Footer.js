import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return(
        <footer>
            <Container className="footerText">
                <Row>
                    <Col className="text-center py-3">Website designed and managed by Appleseed Web Designs</Col>
                </Row>
            </Container>
            </footer>
    )
}

export default Footer