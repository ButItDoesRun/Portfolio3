import React from 'react';
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
import EpisodeList from './EpisodeList.jsx';

const Season = ({ season }) =>
    <Container fluid>
        <Accordion.Item eventKey={season.season}>
            <Accordion.Header>Season: {season.season}</Accordion.Header>
            <Accordion.Body>
                <EpisodeList episodeList={season.episodes}></EpisodeList>
            </Accordion.Body>
        </Accordion.Item>
    </Container>;

const SeasonsAccordion = ({ tvShowContentList }) =>
    <Container fluid>
        <Accordion>
            {tvShowContentList.map(season => <Season season={season}></Season>)}
        </Accordion>
    </Container>;

export default SeasonsAccordion;