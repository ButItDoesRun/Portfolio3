import React from 'react';
import Container from "react-bootstrap/Container";

import ActorList from './ActorList';
import Paging from './Paging';

const ActorsPaginationList = ({actorsPagedList}) =>
    <Container fluid>
        <h3>Actors</h3>
        <Paging pagedList={actorsPagedList} active={1}></Paging>
        <ActorList actorList={actorsPagedList.items}></ActorList>
    </Container>;

export default ActorsPaginationList;
