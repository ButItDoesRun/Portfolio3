import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";


const TitleActor = ({ actor }) => {
    const lastSegment = actor.url.split("/").pop();
    const url = `/person/${lastSegment}`;

    return (
        <Container>
        <Row>
        <Col xs={3}>Person : </Col>
        <Col xs={15}><NavLink to={url} 
        onClick = { () => window.location.replace(url)}>{actor.name}</NavLink></Col>
        <Col xs={15}>Character : {actor.character}</Col>
        </Row>
        </Container>
    );
};

const TitleActorList = ({ titleActorList }) =>
    <Container fluid>
        <ListGroup>
            {titleActorList.map(actor =>
                <ListGroup.Item>
                    <TitleActor actor={actor} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default TitleActorList;