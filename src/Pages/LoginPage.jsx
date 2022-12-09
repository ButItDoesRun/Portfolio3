import React, { useEffect, useContext, useState } from 'react';
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import User from '../DataService/User';
import LoginForm from '../PageComponents/LoginPageCompontents/LoginForm';

async function LoginUser(username, password) {
    const user = new User(username, password);
    const token = await user.LoginUser();
    return (token);
};

const LoginPage = ({ tokenSetter }) => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(false)

    if (!loggedIn) {
        return (
            <Container fluid>
                <h3>Login</h3>
                <LoginForm
                    username={username} setUsername={setUsername}
                    password={password} setPassword={setPassword} />
                <Row className="justify-content-md-center">
                    <Col></Col>
                    <Col>
                        <Button variant="primary" onClick={async () => {
                            const token = await LoginUser(username, password);
                            tokenSetter(token);
                            if (token !== null) setLoggedIn(true);
                        }}>
                            Login
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" as={Link} to="/user/register">
                            Register
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>

            </Container >
        );
    } else {
        return (
            <p>Sucessfully logged in</p>
        );

    }

};

export default LoginPage;