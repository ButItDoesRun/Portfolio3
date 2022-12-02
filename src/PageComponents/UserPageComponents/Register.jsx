import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import User from '../../DataService/User';

const RegisterUser = (username, password, email, birthyear ) => {
    const user = new User(username, password, email, birthyear);
    user.RegisterUser();
};

const BirthyearOptions = ({ getter, setter, startYear, endYear }) => {
    let items = [];
    // if (getter === "") setter(startYear);
    for (let number = startYear; number <= endYear; number++) {
        items.push(
            <option key={number}>
                {number}
            </option>
        );
    }

    return (
        <Form.Select
            value={getter}
            onChange={e => setter(e.target.value)}>
            {items}
        </Form.Select>
    );
};


const Register = () => {
    const selectStartYear = "1980";
    const selectEndYear = "2020";

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [birthyear, setBirthyear] = useState(selectStartYear);

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
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => RegisterUser(username, password, email, birthyear)}>
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>);
};

export default Register;