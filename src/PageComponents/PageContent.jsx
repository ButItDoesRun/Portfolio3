import React, { useContext, useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
// import Paging from './Paging';
import GetSpecificPageNoToken from '../DataService/GetSpecificPageNoToken';


const PageContent = ({ url, setContent}) => {
    let [pageContent, setPageContent] = useState(null);
    useEffect(() => {
        async function getPageContent(url) {
            if (url !== null){
                const json = await GetSpecificPageNoToken(url);
                setContent(json);
                setPageContent(json);
            }
        };
        setContent(null);
        getPageContent(url);
    }, []);

    return (
        <Container fluid>
            {(pageContent === null) ?
                <p>Loading...</p> :
                null
            }
        </Container>
    );
};

export default PageContent;