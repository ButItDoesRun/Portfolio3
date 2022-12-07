import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import PageContent from '../PageComponents/PageContent';
import TvShow from '../PageComponents/TvShowPageComponents/TvShow';

const TvShowPage = () => {
    let [tvShowContent, setTvShowContent] = useState(null);
    
    const base = "https://localhost:5001/api/title/tvshow/"; 
    const {id} = useParams();
    let url = base + id;

    useEffect(() => {
    }, [tvShowContent]);

    return (
        <Container>
            <PageContent url={url} setContent={setTvShowContent}></PageContent>
            {(tvShowContent === null) ?
                <p>Loading content...</p> :
                <TvShow tvShow={tvShowContent}></TvShow>
            }
        </Container>
    );
};

export default TvShowPage;