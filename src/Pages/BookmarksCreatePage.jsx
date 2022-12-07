import React, { useEffect, useContext, useState } from 'react';
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import Bookmark from '../DataService/Bookmark';
import TokenContext from '../Context/TokenContext';

async function CreateBookmark(token, id, name) {
    const bookmark = new Bookmark(id, name);
    const result = await bookmark.CreateBookmark(token);
    return (result);
};

const BookmarksCreatePage = () => {
    const {id} = useParams();
    let [name, setName] = useState(null);
    let [bookmarkCreated, setBookmarkCreated] = useState(false);
    const token = useContext(TokenContext);

    return (
        <Container>
            <p>Name your bookmark</p>
            <p>Field to name your bookmark</p>
            <p>Button to add/save, links to bookmarks list</p>
            <Button variant="primary" onClick={async () => {
                            const result = await CreateBookmark(token, id, name);
                            setBookmarkCreated(result);
                            console.log(result);
                        }}>Add bookmark</Button>
            <p>Button to cancel, links to main page</p>
        </Container>
    );
};

export default BookmarksCreatePage;