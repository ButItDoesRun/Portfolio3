import React, { useContext, useEffect, useState } from 'react';
import TokenContext from '../Context/TokenContext';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../DataService/User';
import UserFacts from '../PageComponents/UserPageComponents/UserFacts';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from "react-router-dom";
import { GetWordCloudPerson } from '../DataService/WordCloud';
import WordCloud from '../PageComponents/WordCloudPageComponents/WordCloud';

const WordCloudPersonPage = () => {
    const { name } = useParams();
    let [words, setWords] = useState(null);

    useEffect(() => {
        async function getWords(name, setWords) {
            await GetWordCloudPerson(name, setWords);
        };
        getWords(name, setWords);
    }, []);

    console.log(words);

    return (
        <Container>
            {(words === null)
                ? <p>Loading...</p>
                :
                <>
                    <h3>{name}</h3>
                    <WordCloud words={words} />
                </>}
        </Container>
    );
};

export default WordCloudPersonPage;