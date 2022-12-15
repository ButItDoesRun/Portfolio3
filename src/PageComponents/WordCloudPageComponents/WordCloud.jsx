import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const WordCloud = ({ words }) => {
    const navigate = useNavigate();

    const options = {
        rotations: 0,
        fontFamily: 'impact',
        fontSizes: [10, 80],
        transitionDuration: 1000,
        maxWords: 100,
        enableTooltip: false
    };

    const callbacks = {
        onWordClick: (word) => navigate("/wordcloud/" + word.text)
    }

    return (
        <Container fluid>
            <ReactWordcloud words={words} options={options} callbacks={callbacks} />
        </Container>
    );
};

export default WordCloud;