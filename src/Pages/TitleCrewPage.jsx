import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import PageContent from '../PageComponents/PageContent';
import TitleCrewList from '../PageComponents/TitlePageComponents/TitleCrewPageComponents/TitleCrewList';

const TitleCrewPage = () => {
    let [titleCrewContent, setTitleCrewContent] = useState(null);
    
    const base = "https://localhost:5001/api/title/crew/"; 
    const {id} = useParams();
    let url = base + id;

    useEffect(() => {
    }, [titleCrewContent]);

    return (
        <Container>
            <PageContent url={url} setContent={setTitleCrewContent}></PageContent>
            {(titleCrewContent === null) ?
                <p>Loading content...</p> :
                <TitleCrewList titleCrew={titleCrewContent}></TitleCrewList>
            }
        </Container>
    );
};

export default TitleCrewPage;