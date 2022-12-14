import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink, Link} from "react-router-dom";

const Title = ({ title }) => {
    const lastSegment = title.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
        <Container>
        <Row>
        <Col xs={3}>Name : </Col>
        <Col xs={15}>
            <NavLink as={Link} to={url}>{title.title}</NavLink>
        </Col>
        </Row>
        </Container>
    );

};


const SearchTitlesList = ({ searchTitlesList }) =>
    <Container fluid>
        <ListGroup>
            {searchTitlesList.map(title =>
                <ListGroup.Item key = {title.url}>
                    <Title title={title} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default SearchTitlesList;