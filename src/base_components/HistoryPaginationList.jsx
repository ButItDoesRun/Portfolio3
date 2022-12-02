import React from 'react';
import Container from "react-bootstrap/Container";

import HistoryList from './HistoryList';
import Paging from './Paging';

const HistoryPaginationList = ({ historyPagedList }) =>
    <Container fluid>
        <h3>User History</h3>
        <Paging pagedList={historyPagedList} active={1}></Paging>
        <HistoryList historyList={historyPagedList.items}></HistoryList>
    </Container>;

export default HistoryPaginationList;