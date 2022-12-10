import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink, Link} from "react-router-dom";

const KnowForTitle = ({ title }) => {
    const lastSegment = title.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
   
        <Container>
        <Row>
        <Col xs={3}>Title : </Col>
        <Col xs={15}> <NavLink as={Link} to={url}>{title.title}</NavLink></Col>
        </Row>
        </Container>
    );

};

const KnownForTitlesList = ({ knownForTitlesList }) =>
    <Container fluid>
        <ListGroup>
            {knownForTitlesList.map(title =>
                <ListGroup.Item key = {title.title}>
                    <KnowForTitle title={title} />
                </ListGroup.Item>
            )}
            
        </ListGroup>
    </Container>;

export default KnownForTitlesList;