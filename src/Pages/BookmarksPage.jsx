import React, { useContext, useEffect, useState } from 'react';
import TokenContext from '../Context/TokenContext';
import Container from "react-bootstrap/Container";
import GetBookmarks from '../DataService/Bookmarks';
import BookmarksPaginationList from '../PageComponents/BookmarksPageComponents/BookmarksPaginationList';

const BookmarksPage = () => {
    let [bookmarks, setBookmarks] = useState(null);
    const token = useContext(TokenContext);

    useEffect(() => {
        async function getBookmarksList(token, setBookmarks){
            if (token !== null)
                await GetBookmarks(token, setBookmarks);
        };
        getBookmarksList(token, setBookmarks);
    }, [token]);

    return (
        <Container>
            {(bookmarks === null) ? <p>No content</p> : 
                <BookmarksPaginationList bookmarksPagedList={bookmarks}></BookmarksPaginationList>
            }
        </Container>
    );
};

export default BookmarksPage;