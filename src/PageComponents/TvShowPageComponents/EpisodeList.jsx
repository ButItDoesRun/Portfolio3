import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink, Link} from "react-router-dom";

const Episode = ({ episode }) => {
    const lastSegment = episode.url.split("/").pop();
    const url = `/title/${lastSegment}`;


    return(

        <Container fluid>
        <p>Ep. {episode.episode}</p>
        <p><NavLink as={Link} to={url}>{episode.name}</NavLink></p>
        </Container>
    );

}

const EpisodeList = ({ episodeList }) =>
    <Container fluid>
        <ListGroup>
            {episodeList.map(episode =>
                <ListGroup.Item key = {episode.url}>
                    <Episode episode={episode} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default EpisodeList;