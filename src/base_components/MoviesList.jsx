import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Movie = ({ movie }) => 
<Container>
<Row>
  <Col xs={3}>Title : </Col>
  <Col xs={15}><a href={movie.url}> {movie.name}</a></Col>
  <Col xs={15}>Airing date : {movie.airingDate}</Col>
  <Col xs={15}>Rating : {movie.rating}</Col>
</Row>
</Container>;

const MoviesList = ({ moviesList }) =>
    <Container fluid>
        <ListGroup>
            {moviesList.map(movie =>
                <ListGroup.Item>
                    <Movie movie={movie} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default MoviesList;