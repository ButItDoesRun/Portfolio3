import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function showDateOnly (str) {
    return (str.substring(0, 10))
}

const History = ({ history }) => 
<Container>
<Row>
  <Col >Search : {history.content}</Col>
  <Col md="auto">Date: {showDateOnly(history.date)}</Col>
</Row>
</Container>;

export default History;