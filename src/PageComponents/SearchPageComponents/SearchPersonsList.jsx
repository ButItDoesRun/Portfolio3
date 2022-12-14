import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink, Link} from "react-router-dom";

const Person = ({ person }) => {
    const lastSegment = person.url.split("/").pop();
    const url = `/person/${lastSegment}`;
    
    return (
        <Container>
        <Row>
        <Col xs={3}>Name : </Col>
        <Col xs={15}>
            <NavLink as={Link} to={url}>{person.name}</NavLink>
        </Col>
        </Row>
        </Container>
    );

};

const SearchPersonsList = ({ searchPersonsList }) =>
    <Container fluid>
        <ListGroup>
            {searchPersonsList.map(person =>
                <ListGroup.Item key = {person.url}>
                    <Person person={person} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default SearchPersonsList;