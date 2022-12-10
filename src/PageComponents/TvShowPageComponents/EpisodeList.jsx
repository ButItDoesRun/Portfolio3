import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';

const Episode = ({ episode }) => <p>Ep. {episode.episode} Name: {episode.name}</p>;

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