import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function showDateOnly (str) {
    return (str.substring(0, 10))
}

const History = ({ history }) => 
<Container>
<Row>
  <Col>Search : {history.content}</Col>
  <Col> Date: {showDateOnly(history.date)}</Col>
</Row>
</Container>;


const HistoryList = ({ historyList }) =>
    <Container fluid>
        <ListGroup>
            {historyList.map(history =>
                <ListGroup.Item>
                    <History history={history} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default HistoryList;