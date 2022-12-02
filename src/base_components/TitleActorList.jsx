import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TitleActor = ({ actor }) => 
<Container>
<Row>
  <Col xs={3}>Person : </Col>
  <Col xs={15}><a href={actor.url}> {actor.name}</a></Col>
  <Col xs={15}>Character : {actor.character}</Col>
</Row>
</Container>;

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