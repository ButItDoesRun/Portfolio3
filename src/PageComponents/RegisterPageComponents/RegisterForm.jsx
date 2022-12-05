import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import BirthyearOptions from './BirthyearOptions';

const RegisterForm = ({ username, setUsername, password, setPassword, email, setEmail, birthyear, setBirthyear, selectStartYear, selectEndYear }) => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                    </Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="birthyear">
                            <Form.Label>Birthyear</Form.Label>
                            <BirthyearOptions getter={birthyear} setter={setBirthyear} startYear={selectStartYear} endYear={selectEndYear}></BirthyearOptions>
                        </Form.Group>
                    </Col>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                </Row>
            </Form>
        </Container>);

};

export default RegisterForm;