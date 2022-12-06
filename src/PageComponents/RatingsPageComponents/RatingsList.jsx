import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {NavLink} from "react-router-dom";

const Rating = ({ rating }) => {
    const lastSegment = rating.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
        <Container>
        <Row>
        <Col xs={3}>Title : </Col>
        <Col xs={15}><NavLink to={url} 
        onClick = { () => window.location.replace(url)}>{rating.title}</NavLink></Col>
        <Col xs={15}>Rating : {rating.rating}</Col>
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