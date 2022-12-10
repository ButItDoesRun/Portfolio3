import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import History from './History';


const HistoryList = ({ historyList }) =>
    <Container fluid>
        <ListGroup>
            {historyList.map(history =>
                <ListGroup.Item key={history.content}>
                    <History history={history} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default HistoryList;