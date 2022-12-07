import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationListNoToken from '../PageComponents/PaginationListNoToken';
import ActorList from '../PageComponents/ActorsPageComponents/ActorList';

const ActorsPage = () => {
    let [actorsContent, setActorsContent] = useState(null);
    const url = "https://localhost:5001/api/persons/actors"; 

    useEffect(() => {
    }, [actorsContent]);

    return (
        <Container>
            <PaginationListNoToken url={url} setContent={setActorsContent}></PaginationListNoToken>
            {(actorsContent === null) ?
                <p>Loading content...</p> :
                <ActorList actorList={actorsContent}></ActorList>
            }
        </Container>
    );
};

export default ActorsPage;