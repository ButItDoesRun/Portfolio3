import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import User from '../../DataService/User';

async function LoginUser(username, password) {
    const user = new User(username, password);
    const token = await user.LoginUser();
    return(token);
};

const Login = ({ tokenSetter }) => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    
    return (
        <Container fluid>
            <h3>Login</h3>
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
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Col></Col>
                    <Col>
                        <Button variant="primary" onClick={async () => {
                            const token = await LoginUser(username, password);
                            tokenSetter(token);
                        }}>
                            Login
                        </Button>
                    </Col>
                    {/* <Col>
                        <Button variant="primary" type="register">
                            Register
                        </Button>
                    </Col> */}
                    <Col></Col>
                </Row>
            </Form>
        </Container >
    );
};

export default Login;