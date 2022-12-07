import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import PageContent from '../PageComponents/PageContent';
import TitleById from '../PageComponents/TitlePageComponents/TitleById';

const TitlePage = () => {
    let [titleContent, setTitleContent] = useState(null);
    
    const base = "https://localhost:5001/api/title/";
    const {id} = useParams();
    const url = base + id;

    useEffect(() => {
    }, [titleContent]);

    return (
        <Container>
            <PageContent url={url} setContent={setTitleContent}></PageContent>
            {(titleContent === null) ?
                <p>Loading content...</p> :
                <TitleById title={titleContent}></TitleById>
            }
        </Container>
    );
};

export default TitlePage;