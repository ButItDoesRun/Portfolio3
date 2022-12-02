import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Person = ({ person }) => 
<Container>
<Row>
  <Col>Name : </Col>
  <Col xs={10}>{person.name}</Col>
</Row>
</Container>;

const SearchPersonsList = ({ searchPersonsList }) =>
    <Container fluid>
        <ListGroup>
            {searchPersonsList.map(person =>
                <ListGroup.Item>
                    <Person person={person} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default SearchPersonsList;