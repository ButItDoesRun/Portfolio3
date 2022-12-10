import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { DeleteUser } from '../DataService/User';
import TokenContext from '../Context/TokenContext';

const UserDeletePage = () => {
    const navigate = useNavigate();
    let [userDeleted, setUserDeleted] = useState(null);
    const token = useContext(TokenContext);

    async function DeleteUserObject(token) {
        const result = await DeleteUser(token);
        return (result);
    };

    useEffect(() => {
        if (token === null) {
            navigate("/home");
        }
        if (userDeleted === false) {
            alert("An error occured");
            navigate("/user/");
        }
        if (userDeleted === true) {
            navigate("/user/logout");
        }
    }, [userDeleted]);

    return (
        <Container fluid>
            <h3>Are you sure you want to delete your user?</h3>
            <p>All data will be deleted. This cannot be undone</p>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button variant="primary" onClick={async () => {
                        const result = await DeleteUserObject(token);
                        setUserDeleted(result);
                    }}>
                        Yes
                    </Button>
                </Col>
                <Col md="auto">
                    <Button variant="danger" as={Link} to="/user/">
                        No
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default UserDeletePage;