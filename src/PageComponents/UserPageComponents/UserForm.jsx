import React from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import BirthyearOptions from '../RegisterPageComponents/BirthyearOptions'

const UserForm = ({ email, setEmail, birthyear, setBirthyear, selectStartYear, selectEndYear }) => {
    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="birthyear">
                    <Form.Label>Birthyear</Form.Label>
                    <BirthyearOptions getter={birthyear} setter={setBirthyear} startYear={selectStartYear} endYear={selectEndYear}></BirthyearOptions>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default UserForm;