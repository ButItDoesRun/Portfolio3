import React from 'react';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const HistoryDeleteButton = () =>
    <Container fluid>
        <Col md="auto">
            <Button variant="danger" as={Link} to={"/user/history/delete/"}>
                Delete search history
            </Button>
        </Col>
    </Container>;

export default HistoryDeleteButton;