import React, { useContext, useEffect, useState } from 'react';
import TokenContext from '../Context/TokenContext';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../DataService/User';
import UserFacts from '../PageComponents/UserPageComponents/UserFacts';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from "react-router-dom";

const UserPage = () => {
    let [user, setUser] = useState(new User("Unknown", "Unknown", "Unknown", "Unknown"));
    const token = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token === null) {
            navigate("/home");
        }
        async function getUserObject(user, setUser, token) {
            if (token !== null)
                await user.GetUser(token, setUser);
        };
        getUserObject(user, setUser, token);
    }, [token]);

    return (
        <Container>
            <Row>
                <UserFacts user={user} />
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button variant="primary" as={Link} to={"/user/edit/"}>
                        Edit user
                    </Button>
                </Col>
                <Col md="auto">
                    <Button variant="danger" as={Link} to={"/user/delete/"}>
                        Delete
                    </Button>
                </Col>

            </Row>


        </Container>
    );
};

export default UserPage;