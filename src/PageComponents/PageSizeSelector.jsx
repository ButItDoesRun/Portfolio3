import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const PageSizeSelector = ({ pageSize, setPageSize }) => {
    return (
        <Container fluid>
            <Row  className="justify-content-end align-items-center">
                <Col md="auto">
                    <p>Page size: </p>
                </Col>
                <Col sm={2}>
                <Form>
                    <Form.Group className="mb-3" controlId="size">
                        <Form.Control 
                            size="sm"  
                            type="text"
                            placeholder="20"
                            value={pageSize}
                            onChange={e => setPageSize(e.target.value)} />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PageSizeSelector;