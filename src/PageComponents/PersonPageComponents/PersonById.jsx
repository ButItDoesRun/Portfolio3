import React from "react";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {NavLink, Link} from "react-router-dom";

// Components
// import DirectorList from './DirectorList';
// import TitleActorList from './TitleActorList'; 
import ProfessionList from './ProfessionList';
import KnownForTitlesList from "./KnownForTitlesList";

const PersonById = ({ person }) => {
    const lastSegment = person.bookmark.split("/").pop();
    const url = `/user/bookmarks/create/${lastSegment}`;
    return (
        <Container fluid>
            <h2>{person.name}</h2>
            <Tabs
                defaultActiveKey="facts"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="facts" title="Facts">
                    <p>Birth Year: {person.birthYear}</p>
                    <p>Death Year: {person.deathYear}</p>
                    <p> <NavLink as={Link} to={url}>Bookmark Me!</NavLink>
                        {/* <NavLink to={url} 
                    onClick = { () => window.location.replace(url)}>Bookmark Me!</NavLink> */}
                    </p>
                </Tab>

                <Tab eventKey="professions" title="Professions">
                    <ProfessionList professionList={person.professionList}></ProfessionList>
                </Tab>

                <Tab eventKey="knownFor" title="Known For">
                    {person.knownForListWithUrl.length === 0 ? <p>Not famous for any movies starred in</p>
                    : <KnownForTitlesList knownForTitlesList = {person.knownForListWithUrl}></KnownForTitlesList>
                    }
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PersonById;