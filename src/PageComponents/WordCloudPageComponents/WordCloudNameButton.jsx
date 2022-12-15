import React from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const WordCloudNameButton = ({ name }) => {
    return (
        <Container fluid>
            <Button variant="info" as={Link} to={"/person/wordcloud/" + name}>
                Generate Wordcloud
            </Button>
        </Container>
    );
};

export default WordCloudNameButton;