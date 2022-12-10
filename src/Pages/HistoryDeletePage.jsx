import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import DeleteHistory from '../DataService/History';
import TokenContext from '../Context/TokenContext';

const HistoryDeletePage = () => {
    const navigate = useNavigate();
    let [historyDeleted, setHistoryDeleted] = useState(null);
    const token = useContext(TokenContext);

    async function DeleteUserHistory(token) {
        const result = await DeleteHistory(token);
        return (result);
    };

    useEffect(() => {
        if (historyDeleted === false) {
            alert("An error occured");
            navigate("/user/history");
        }
        if (historyDeleted === true) {
            navigate("/user/history");
        }
    }, [historyDeleted]);

    return (
        <Container fluid>
            <p>Are you sure you want to delete search history?</p>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button variant="primary" onClick={async () => {
                        const result = await DeleteUserHistory(token);
                        setHistoryDeleted(result);
                    }}>
                        Yes
                    </Button>
                </Col>
                <Col md="auto">
                    <Button variant="danger" as={Link} to="/user/history">
                        No
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HistoryDeletePage;