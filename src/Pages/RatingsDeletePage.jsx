import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";


import Rating from '../DataService/Rating';
import TokenContext from '../Context/TokenContext';

const RatingsDeletePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    let [ratingDeleted, setRatingDeleted] = useState(null);
    const token = useContext(TokenContext);

    useEffect(() => {
        if (token === null) {
            navigate("/home");
        }
        if(ratingDeleted === null){
            async function DeleteRating(token, id) {
                const rating = new Rating(id);
                const result = await rating.DeleteRating(token);
                setRatingDeleted(result);
            };
            DeleteRating(token, id);

            console.log(DeleteRating(token, id));
        }        
        
        if (ratingDeleted === false) {
            alert("An error occured");
            navigate("/user/ratings");
        }
        if (ratingDeleted === true) {
            navigate("/user/ratings");
        }
    }, [ratingDeleted]);

    return (
        <Container fluid>
            <p>Deleting rating...</p>
        </Container>
    );
};

export default RatingsDeletePage;