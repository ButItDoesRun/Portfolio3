import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink, Link} from "react-router-dom";


const Actor = ({ actor }) => {
    const lastSegment = actor.personUrl.split("/").pop();
    const url = `/person/${lastSegment}`;

    return (
        <Container>
        <Row>
        <Col xs={3}>Person : </Col>
        <Col xs={15}> <NavLink as={Link} to={url}>{actor.name}</NavLink>
        </Col>
        <Col xs={15}>Birth year : {actor.birthYear}</Col>
        <Col xs={15}>Death year : {actor.deathYear}</Col>
        <Col xs={15}>Popularity : {actor.popularity}</Col>
        </Row>
        </Container>
    );
};

const ActorList = ({ actorList }) =>
    <Container fluid>
        <ListGroup>
            {actorList.map(actor =>
                <ListGroup.Item key = {actor.name}>
                    <Actor actor={actor} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default ActorList;



