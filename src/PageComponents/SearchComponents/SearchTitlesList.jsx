import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Title = ({ title }) => 
<Container>
<Row>
  <Col>Title : </Col>
  <Col xs={10}>{title.title}</Col>
</Row>
</Container>;

const SearchTitlesList = ({ searchTitlesList }) =>
    <Container fluid>
        <ListGroup>
            {searchTitlesList.map(title =>
                <ListGroup.Item>
                    <Title title={title} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default SearchTitlesList;