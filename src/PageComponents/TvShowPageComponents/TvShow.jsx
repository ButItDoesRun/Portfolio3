import React from "react";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Components
import SeasonsAccordion from './SeasonsAccordion';
// import DirectorList from '../DirectorList';

const TvShow = ({ tvShow }) =>
    <Container fluid>
        <h2>{tvShow.name}</h2>
        <Tabs
            defaultActiveKey="facts"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="facts" title="Facts">
                <p>Rating: {tvShow.rating}</p>
                <p>Airing Date: {tvShow.airingDate}</p>
            </Tab>

            <Tab eventKey="seasons" title="Seasons">
                <SeasonsAccordion tvShowContentList={tvShow.tvShowContentList}></SeasonsAccordion>
            </Tab>
            {/* <Tab eventKey="directors" title="Directors">
                <DirectorList directorList={tvShow.directorList}></DirectorList>
            </Tab> */}
        </Tabs>
        
    </Container>;

export default TvShow;