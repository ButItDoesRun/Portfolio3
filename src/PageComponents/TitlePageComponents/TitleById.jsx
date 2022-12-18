import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {NavLink, Link} from "react-router-dom";
import TokenContext from '../../Context/TokenContext';

// Components
import DirectorList from './DirectorList';
import TitleActorList from './TitleActorList'; 
import RatingComponent from '../RatingsPageComponents/RatingComponent';

const TitleById = ({ title }) => {
    const lastSegment = title.bookmark.split("/").pop();
    const url = `/user/bookmarks/create/${lastSegment}`;
    const token = useContext(TokenContext);

    return (
        <Container fluid>
            <h2>{title.title}</h2> 
            {(token === null) ? 
                null
               :
                <RatingComponent id = "myRating"></RatingComponent>}
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
                    {(token === null) ? 
                            null :
                            <NavLink as={Link} to={url}>Bookmark Me!</NavLink> }              
                </Tab>

                <Tab eventKey="directors" title="Directors">
                    <DirectorList directorList={title.directorListWithUrl}></DirectorList>
                </Tab>

                <Tab eventKey="actors" title="Actors">
                    <TitleActorList titleActorList = {title.actorListWithUrl}></TitleActorList>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default TitleById;