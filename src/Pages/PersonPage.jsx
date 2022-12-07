import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import PageContent from '../PageComponents/PageContent';
import PersonById from '../PageComponents/PersonPageComponents/PersonById';

const PersonPage = () => {
    let [personContent, setPersonContent] = useState(null);
    
    const base = "https://localhost:5001/api/person/"; 
    const {id} = useParams();
    let url = base + id;

    useEffect(() => {
    }, [personContent]);

    return (
        <Container>
            <PageContent url={url} setContent={setPersonContent}></PageContent>
            {(personContent === null) ?
                <p>Loading content...</p> :
                <PersonById person={personContent}></PersonById>
            }
        </Container>
    );
};

export default PersonPage;