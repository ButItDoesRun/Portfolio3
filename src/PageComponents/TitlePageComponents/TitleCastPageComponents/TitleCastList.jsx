import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import CharactersAccordion from './CharactersAccordion';


const Person = ({ person }) => 
    <Container>
    <Row>
    <Col xs={3}>Person : </Col>
    <Col xs={15}><a href={person.personUrl}> {person.name}</a></Col>
    <Col xs={15}>Production Role : {person.productionRole}</Col>
    <Col xs={15} >
        <Accordion defaultActiveKey= "none" flush></Accordion>
        <Accordion>
            <CharactersAccordion characterList={person.characterList}></CharactersAccordion>
        </Accordion>
        </Col>
    <Col xs={15}>Popularity : {person.popularity}</Col>
    </Row>
    </Container>;


const TitleCastList = ({ titleCast }) =>
    <Container fluid>
        <h3>Cast</h3>
        <Col xs={3}>Title: <a href={titleCast.titleUrl}> {titleCast.title}</a></Col>
        <Col xs={15}>
        <ListGroup>
            {titleCast.personsList.map(person =>
                <ListGroup.Item>
                    <Person person={person} />
                </ListGroup.Item>
            )}
        </ListGroup>
        </Col>
    </Container>;

export default TitleCastList;