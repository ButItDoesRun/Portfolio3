import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import BookmarkWithButtons from './BookmarkWithButtons';

const BookmarksList = ({ bookmarkList }) =>
<Container fluid>
    <ListGroup>
        {bookmarkList.map(bookmark =>
            <ListGroup.Item key={bookmark.name}>
                <BookmarkWithButtons bookmark={bookmark} />
            </ListGroup.Item>
        )}
    </ListGroup>
</Container>;

export default BookmarksList;