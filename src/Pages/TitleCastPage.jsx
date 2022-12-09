import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import PageContent from '../PageComponents/PageContent';
import TitleCastList from '../PageComponents/TitlePageComponents/TitleCastPageComponents/TitleCastList';

const TitleCastPage = () => {
    let [titleCastContent, setTitleCastContent] = useState(null);
    
    const base = "https://localhost:5001/api/title/cast/"; 
    const {id} = useParams();
    let url = base + id;

    useEffect(() => {
    }, [titleCastContent]);

    return (
        <Container>
            <PageContent url={url} setContent={setTitleCastContent}></PageContent>
            {(titleCastContent === null) ?
                <p>Loading content...</p> :
                <TitleCastList titleCast={titleCastContent}></TitleCastList>
            }
        </Container>
    );
};

export default TitleCastPage;