import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';

const Profession = ({ profession }) => <p>{profession}</p>

const ProfessionList = ({ professionList }) =>
    <Container fluid>
        <ListGroup>
            {professionList.map(profession =>
                <ListGroup.Item key = {profession}>
                    <Profession profession={profession} />
                </ListGroup.Item>
            )}
            
        </ListGroup>
    </Container>;

export default ProfessionList;