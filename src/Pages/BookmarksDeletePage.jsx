import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bookmark from '../DataService/Bookmark';
import TokenContext from '../Context/TokenContext';

const BookmarksDeletePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    let [bookmarkDeleted, setBookmarkDeleted] = useState(null);
    const token = useContext(TokenContext);

    useEffect(() => {
        async function DeleteBookmark(token, id) {
            const bookmark = new Bookmark(id);
            const result = await bookmark.DeleteBookmark(token);
            setBookmarkDeleted(result);
        };
        DeleteBookmark(token, id);
        
        if (bookmarkDeleted === false) {
            alert("An error occured");
            navigate("/user/bookmarks");
        }
        if (bookmarkDeleted === true) {
            navigate("/user/bookmarks");
        }
    }, [bookmarkDeleted]);

    return (
        <Container fluid>
            <p>Deleting bookmark...</p>
        </Container>
    );
};

export default BookmarksDeletePage;