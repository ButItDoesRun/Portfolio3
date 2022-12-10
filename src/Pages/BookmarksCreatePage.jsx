import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bookmark from '../DataService/Bookmark';
import BookmarkForm from '../PageComponents/BookmarksPageComponents/BookmarkForm';
import TokenContext from '../Context/TokenContext';

async function CreateBookmark(token, id, name) {
    const bookmark = new Bookmark(id, name);
    const result = await bookmark.CreateBookmark(token);
    return (result);
};

const BookmarksCreatePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    let [name, setName] = useState(null);
    let [bookmarkCreated, setBookmarkCreated] = useState(null);
    const token = useContext(TokenContext);

    useEffect(() => {
        if (bookmarkCreated === false) {
            alert("The bookmark was not created");
        }
        if (bookmarkCreated === true) {
            alert("The bookmark was created!");
            navigate("/user/bookmarks");
        }
    }, [bookmarkCreated]);


    return (
        <Container fluid>
            <Row>
                <BookmarkForm name={name} setName={setName}></BookmarkForm>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={async () => {
                        const result = await CreateBookmark(token, id, name);
                        setBookmarkCreated(result);
                    }}>Add bookmark</Button>
                </Col>
                <Col>
                <Button variant="danger" onClick={() => {
                        setBookmarkCreated(false);
                        navigate("/home");
                    }}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default BookmarksCreatePage;