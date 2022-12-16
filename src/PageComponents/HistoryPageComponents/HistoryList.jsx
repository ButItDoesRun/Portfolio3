import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import History from './History';

function generateKey(){
    const randomKey = Math.floor(Math.random() * 100);
    return(randomKey);
}

const HistoryList = ({ historyList }) =>
    <Container fluid>
        <ListGroup>
            {historyList.map(history =>
                <ListGroup.Item key={history.date + generateKey()}>
                    <History history={history} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default HistoryList;