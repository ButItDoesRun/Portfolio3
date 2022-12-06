import React from "react";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Components
import DirectorList from './DirectorList';
import TitleActorList from './TitleActorList'; 

const TitleById = ({ title }) =>
    <Container fluid>
        <h2>{title.title}</h2>
        <Tabs
            defaultActiveKey="facts"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="facts" title="Facts">
                <p>Year: {title.year}</p>
                <p>Genre: {title.genre[0]}</p>
                <p>Runtime: {title.runtime}</p>
                <p>Rating: {title.rating}</p>
                <p><a href={title.bookmark}> Bookmark Me!</a></p>
            </Tab>

            <Tab eventKey="directors" title="Directors">
                <DirectorList directorList={title.directorListWithUrl}></DirectorList>
            </Tab>

            <Tab eventKey="actors" title="Actors">
                <TitleActorList titleActorList = {title.actorListWithUrl}></TitleActorList>
            </Tab>
        </Tabs>
    </Container>;

export default TitleById;