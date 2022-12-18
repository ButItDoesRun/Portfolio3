import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink, Link} from "react-router-dom";

const Director = ({ director }) => {
    const lastSegment = director.url.split("/").pop();
    const url = `/person/${lastSegment}`;

    return(
        <Container fluid>
            <p><NavLink as={Link} to={url}>{director.name}</NavLink></p>
        </Container>
    );

}

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
