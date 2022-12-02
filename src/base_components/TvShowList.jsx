import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TvShow = ({ tvshow }) => 
<Container>
<Row>
  <Col xs={3}>Tv Show : </Col>
  <Col xs={15}><a href={tvshow.url}> {tvshow.name}</a></Col>
  <Col xs={15}>Airing date : {tvshow.airingDate}</Col>
  <Col xs={15}>Seasons : {tvshow.tvShowContentList.length}</Col>
  <Col xs={15}>Rating : {tvshow.rating}</Col>

</Row>
</Container>;

const TvShowList = ({ tvshowList }) =>
    <Container fluid>
        <ListGroup>
            {tvshowList.map(tvshow =>
                <ListGroup.Item>
                    <TvShow tvshow={tvshow} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default TvShowList;