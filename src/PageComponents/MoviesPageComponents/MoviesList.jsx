import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink, Link} from "react-router-dom";

const Movie = ({ movie }) => {
    const lastSegment = movie.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
        <Container>
        <Row>
        <Col xs={3}>Title : </Col>
        <Col xs={15}>
            <NavLink as={Link} to={url}>{movie.name}</NavLink>
        </Col>
        <Col xs={15}>Airing date : {movie.airingDate}</Col>
        <Col xs={15}>Rating : {movie.rating}</Col>
        </Row>
        </Container>
    );

};

const MoviesList = ({ moviesList }) =>
    <Container fluid id = "movies">
        <ListGroup>
            {moviesList?.map(movie =>
                <ListGroup.Item key={movie.name}>
                    <Movie movie={movie} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default MoviesList;