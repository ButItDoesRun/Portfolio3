import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';

const Director = ({ director }) => <p>{director.name}</p>

const DirectorList = ({ directorList }) =>
    <Container fluid>
        <ListGroup>
            {directorList.map(director =>
                <ListGroup.Item key = {director.url}>
                    <Director director={director} />
                </ListGroup.Item>
            )}
            
        </ListGroup>
    </Container>;

export default DirectorList;
