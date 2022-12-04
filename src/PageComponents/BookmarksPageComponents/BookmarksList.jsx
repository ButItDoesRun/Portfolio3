import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';

const Bookmark = ({ bookmark }) => <p><a href={bookmark.url}> {bookmark.name}</a></p>;

const BookmarksList = ({ bookmarkList }) =>
    <Container fluid>
        <ListGroup>
            {bookmarkList.map(bookmark =>
                <ListGroup.Item key={bookmark.name}>
                    <Bookmark bookmark={bookmark} />
                </ListGroup.Item>
            )}
        </ListGroup>
    </Container>;

export default BookmarksList;