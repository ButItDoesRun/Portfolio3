import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

const Character = ({character}) => <p>{character.character}</p>;

const CharacterList = ({ characterList }) =>
    <Container fluid>
        <ListGroup>
            {characterList.map(character =>
                <ListGroup.Item>
                    <Character character={character} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;


const CharactersAccordion = ({ characterList }) =>
    <Container fluid>
        <Accordion.Item eventKey={characterList.character}>
            <Accordion.Header>Characters in title : {characterList.character}</Accordion.Header>
            <Accordion.Body>
                <CharacterList characterList={characterList}></CharacterList>
            </Accordion.Body>
        </Accordion.Item>
    </Container>;



export default CharactersAccordion;