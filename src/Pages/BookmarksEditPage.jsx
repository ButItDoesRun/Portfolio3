import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bookmark from '../DataService/Bookmark';
import BookmarkForm from '../PageComponents/BookmarksPageComponents/BookmarkForm';
import TokenContext from '../Context/TokenContext';
import ValidateText from '../ValidationFunctions/ValidateText';

async function UpdateBookmark(token, id, name) {
    const bookmark = new Bookmark(id, name);
    const result = await bookmark.UpdateBookmark(token);
    return (result);
};

const BookmarksEditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { name } = useParams();
    let [editName, setEditName] = useState(name);
    let [bookmarkEdited, setBookmarkEdited] = useState(null);
    const token = useContext(TokenContext);

    //validation
    let [editNameFeedback, setEditNameFeedback] = useState("");
    let [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const editNameValidation = ValidateText(editName);
        setEditNameFeedback(editNameValidation.feedback);

        if (editNameValidation.Ok) {
            setIsValid(true);
        }
    }, [name]);


    useEffect(() => {
        if (bookmarkEdited === false) {
            alert("Error: Bookmark was not edited");
            // navigate("/user/bookmarks");
        }
        if (bookmarkEdited === true) {
            navigate("/user/bookmarks");
        }
    }, [bookmarkEdited]);

    return (
        <Container fluid>
            <Row>
                <BookmarkForm name={editName} setName={setEditName}></BookmarkForm>
                <p>{editNameFeedback}</p>
            </Row>
            
            <Row>
                <Col>
                    <Button variant="primary" onClick={async () => {
                        if (isValid) {
                            const result = await UpdateBookmark(token, id, editName);
                            setBookmarkEdited(result);
                        } else {
                            alert("Please input a valid name for your bookmark");
                        }

                    }}>Rename bookmark</Button>
                </Col>
                <Col>
                    <Button variant="danger" onClick={() => {
                        setBookmarkEdited(false);
                        navigate("/user/bookmarks");
                    }}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default BookmarksEditPage;