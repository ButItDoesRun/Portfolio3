import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import RatingsList from '../PageComponents/RatingsPageComponents/RatingsList';

const RatingsPage = () => {
    let [ratingsContent, setRatingsContent] = useState(null);
    const url = "https://localhost:5001/api/user/ratings"; 

    useEffect(() => {
    }, [ratingsContent]);

    return (
        <Container>
            <PaginationList url={url} setContent={setRatingsContent}></PaginationList>
            {(ratingsContent === null) ?
                <p>Loading content...</p> :
                <RatingsList ratingsList={ratingsContent}></RatingsList>
            }
        </Container>
    );
};

export default RatingsPage;