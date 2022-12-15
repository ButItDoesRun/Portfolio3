import React, { useContext, useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import { GetWordCloudWord } from '../DataService/WordCloud';
import WordCloud from '../PageComponents/WordCloudPageComponents/WordCloud';

const WordCloudWordPage = () => {
    const { word } = useParams();
    let [words, setWords] = useState(null);

    useEffect(() => {
        async function getWords(word, setWords) {
            await GetWordCloudWord(word, setWords);
        };
        getWords(word, setWords);
    }, [word]);

    return (
        <Container>
            {(words === null)
                ? <p>Loading...</p>
                :
                <>
                    <h3>{word}</h3>
                    <WordCloud words={words} />
                </>}
        </Container>
    );
};

export default WordCloudWordPage;