import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Bookmark from './Bookmark';

const BookmarkWithButtons = ({ bookmark }) => {
    const lastSegment = bookmark.url.split("/").pop();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Bookmark bookmark={bookmark} />
                </Col>
                <Col md="auto">
                    <Button variant="primary" as={Link} to={"/user/bookmarks/edit/" + lastSegment + "/" +bookmark.name}>
                        Edit
                    </Button>
                </Col>
                <Col md="auto">
                    <Button variant="danger" as={Link} to={"/user/bookmarks/delete/" + lastSegment}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default BookmarkWithButtons;