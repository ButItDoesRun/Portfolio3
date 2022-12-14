import React from "react";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {NavLink, Link, useParams} from "react-router-dom";

// Components
import SeasonsAccordion from './SeasonsAccordion';
import RatingComponent from '../RatingsPageComponents/RatingComponent';
// import DirectorList from '../DirectorList';

const TvShow = ({ tvShow }) => {
    const base = "/user/bookmarks/create/"; 
    const {id} = useParams();
    const url = base + id;
    return(
        <Container fluid>
            <h2>{tvShow.name}</h2>
            <RatingComponent id = "myRating"></RatingComponent>
            <Tabs
                defaultActiveKey="facts"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="facts" title="Facts">
                    <p>Rating: {tvShow.rating}</p>
                    <p>Airing Date: {tvShow.airingDate}</p>
                    <p><NavLink as={Link} to={url}>Bookmark Me!</NavLink>
                    </p>
                </Tab>

                <Tab eventKey="seasons" title="Seasons">
                    <SeasonsAccordion tvShowContentList={tvShow.tvShowContentList}></SeasonsAccordion>
                </Tab>
                {/* <Tab eventKey="directors" title="Directors">
                    <DirectorList directorList={tvShow.directorList}></DirectorList>
                </Tab> */}
            </Tabs>
            
        </Container>
    );
};

export default TvShow;