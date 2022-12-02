import React from 'react';
import Container from "react-bootstrap/Container";

import SearchPersonsList from './SearchPersonsList';
import SearchTitlesList from './SearchTitlesList';
import Paging from './Paging';

const SearchList = ({ searchList }) => {
    let persons = [];
    let titles = [];
    if (searchList[0].name == null) titles = searchList;
    if (searchList[0].title == null) persons = searchList;
    
return (
    <Container>
        <SearchTitlesList searchTitlesList={titles}></SearchTitlesList>
        <SearchPersonsList searchPersonsList={persons}></SearchPersonsList>
    </Container>
    );
};


const SearchPaginationList = ({ searchPagedList }) =>
    <Container fluid>
        <Paging pagedList={searchPagedList} active={1}></Paging>
        <SearchList searchList={searchPagedList.items}></SearchList>
    </Container>
export default SearchPaginationList;