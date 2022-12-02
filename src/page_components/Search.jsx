import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Search = () =>
    <Container fluid>
        <Form>
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Select>
                            <option>Title</option>
                            <option>Person</option>
                            <option>Genre</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={5}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control type="text" placeholder="Search..." />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    </Container>;

export default Search;
