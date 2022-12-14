import React, { useEffect,useContext, useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import { Container } from "react-bootstrap";

import Rating from '../../DataService/Rating';
import TokenContext from '../../Context/TokenContext';

async function CreateRating(token, id, rating) {
    const newRating = new Rating(id, rating);
    const result = await newRating.CreateRating(token);
    return (result);
};

const RatingComponent = () => {  
    const navigate = useNavigate();
    const [rate, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const {id} = useParams();
    let [ratingCreated, setRatingCreated] = useState(null);
    const token = useContext(TokenContext);


    useEffect(() => {
        if (token === null) {
            navigate("/home");
        }

        if (ratingCreated === false) {
            alert("Error: The title has not been rated");
        }
        if (ratingCreated === true) {
            alert("The title has been rated!");
            navigate("/user/ratings");
        }
    }, [ratingCreated]);


    return (
      <>
      <Container fluid id="myRating">
            {/* making an array with 5 buttons */}
            {[...Array(10)].map((star, index) => {
            index += 1;
            return (
                <button
                type="button"
                key={index}
                className={index <= ((rate && hover) || hover) ? "on" : "off"}
                onClick={
                    async () => {
                    setRating(index);
                    const result = await CreateRating(token, id, index);
                    setRatingCreated(result);
                }
                }
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rate)}
                >

                {/* &#9733; is the HTML entity code for a star icon */}
                <span className="star">&#9733;</span>  
                </button>
            );
            })}

        </Container>

        </>
    );
};

export default RatingComponent;