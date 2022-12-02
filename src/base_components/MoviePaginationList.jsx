import React from 'react';
import Container from "react-bootstrap/Container";

import MoviesList from './MoviesList';
import Paging from './Paging';

const MoviePaginationList = ({moviesPagedList}) =>
    <Container fluid>
        <h3>Movies</h3>
        <Paging pagedList={moviesPagedList} active={1}></Paging>
        <MoviesList moviesList={moviesPagedList.items}></MoviesList>
    </Container>;

export default MoviePaginationList;


