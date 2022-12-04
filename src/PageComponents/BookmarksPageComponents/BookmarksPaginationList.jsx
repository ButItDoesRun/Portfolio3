import React from 'react';
import Container from "react-bootstrap/Container";

import BookmarksList from './BookmarksList';
import Paging from '../Paging';


const BookmarksPaginationList = ({ bookmarksPagedList }) =>
    <Container fluid>
        <h3>Bookmarks</h3>
        <Paging pagedList={bookmarksPagedList} active={1}></Paging>
        <BookmarksList bookmarkList={bookmarksPagedList.items}></BookmarksList>
    </Container>;

export default BookmarksPaginationList;