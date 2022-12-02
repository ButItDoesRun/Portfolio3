import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Actor = ({ actor }) => 
<Container>
<Row>
  <Col xs={3}>Person : </Col>
  <Col xs={15}><a href={actor.personUrl}> {actor.name}</a></Col>
  <Col xs={15}>Birth year : {actor.birthYear}</Col>
  <Col xs={15}>Death year : {actor.deathYear}</Col>
  <Col xs={15}>Popularity : {actor.popularity}</Col>
</Row>
</Container>;

const ActorList = ({ actorList }) =>
    <Container fluid>
        <ListGroup>
            {actorList.map(actor =>
                <ListGroup.Item>
                    <Actor actor={actor} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default ActorList;



