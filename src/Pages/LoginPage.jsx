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
    let [loggedIn, setLoggedIn] = useState(null)

    useEffect(() => {
        if (loggedIn === false) {
            alert("Login failed. Please check that the input is correct");
            setLoggedIn(null);
        }
    }, [loggedIn]);


    if (!loggedIn || loggedIn === null) {
        return (
            <Container fluid>
                <h3>Login</h3>
                <LoginForm
                    username={username} setUsername={setUsername}
                    password={password} setPassword={setPassword} />
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="primary" onClick={async () => {
                            const token = await LoginUser(username, password);
                            tokenSetter(token);
                            if (token !== null) {
                                setLoggedIn(true);
                            } else {
                                setLoggedIn(false);
                            }
                        }}>
                            Login
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button variant="primary" as={Link} to="/user/register">
                            Register
                        </Button>
                    </Col>
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