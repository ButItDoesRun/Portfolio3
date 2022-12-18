import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {NavLink, Link} from "react-router-dom";

const Rating = ({ rating }) => {
    const lastSegment = rating.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
        <Container fluid>
        <Row>
            <Col xs={12}>
                Title : 
                <br></br>
                <NavLink as={Link} to={url}>{rating.title} </NavLink>
                <br></br>
                Rating : {rating.rating}
            </Col>
            <Col md="auto" id = "ratingsEditBtn">
                <Button variant="primary" as={Link} to={url}>
                    Edit
                </Button>
            </Col>
            <Col md="auto">
                <Button variant="danger" as={Link} to={"/user/ratings/delete/" + lastSegment}>
                    Delete
                    {console.log(lastSegment)}
                </Button>
            </Col>
        </Row>
        </Container>
    );

};

const RatingsList = ({ ratingsList }) =>
    <Container fluid>
        <ListGroup>
            {ratingsList.map(rating =>
                <ListGroup.Item key={rating.title}>
                    <Rating rating={rating} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default RatingsList;