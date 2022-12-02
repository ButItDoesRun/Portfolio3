import React from 'react';
import Container from "react-bootstrap/Container";

import TvShowList from './TvShowList';
import Paging from './Paging';

const TvShowPaginationList = ({tvshowsPagedList}) =>
    <Container fluid>
        <h3>Tv Shows</h3>
        <Paging pagedList={tvshowsPagedList} active={1}></Paging>
        <TvShowList tvshowList={tvshowsPagedList.items}></TvShowList>
    </Container>;

export default TvShowPaginationList;