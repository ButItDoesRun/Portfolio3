import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink, Link} from "react-router-dom";

const Genre = ({ genre }) => {
    const lastSegment = genre.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
        <Container>
        <Row>
        <Col xs={3}>Name : </Col>
        <Col xs={15}>
            <NavLink as={Link} to={url}>{genre.title}</NavLink>
        </Col>
        </Row>
        </Container>
    );

};


const SearchGenresList = ({ searchGenresList }) =>
    <Container fluid>
        <ListGroup>
            {searchGenresList.map(genre =>
                <ListGroup.Item key = {genre.url}>
                    <Genre genre={genre} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default SearchGenresList;