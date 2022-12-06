import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";

const KnowForTitle = ({ title }) => {
    const lastSegment = title.url.split("/").pop();
    const url = `/title/${lastSegment}`;
    
    return (
   
        <Container>
        <Row>
        <Col xs={3}>Title : </Col>
        <Col xs={15}><NavLink to={url} 
        onClick = { () => window.location.replace(url)}>{title.title}</NavLink></Col>
        </Row>
        </Container>
    );

};

const KnownForTitlesList = ({ knownForTitlesList }) =>
    <Container fluid>
        <ListGroup>
            {knownForTitlesList.map(title =>
                <ListGroup.Item>
                    <KnowForTitle title={title} />
                </ListGroup.Item>
            )}
            
        </ListGroup>
    </Container>;

export default KnownForTitlesList;