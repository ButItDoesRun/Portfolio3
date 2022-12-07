import React from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink, Link } from "react-router-dom";

const Bookmark = ({ bookmark }) => {
    const lastSegment = bookmark.url.split("/").pop();
    let url;
    if (lastSegment.includes("t")) {
        url = "/title/"+lastSegment;
    } else if(lastSegment.includes("n")){
        url = "/person/"+lastSegment;
    }

    return(
        <NavLink as={Link} to={url}>{bookmark.name}</NavLink>
    );
};

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