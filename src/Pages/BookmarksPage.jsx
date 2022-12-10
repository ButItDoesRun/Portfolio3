import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import BookmarksList from '../PageComponents/BookmarksPageComponents/BookmarksList';

const BookmarksPage = () => {
    let [bookmarksContent, setBookmarksContent] = useState(null);
    const url = "https://localhost:5001/api/user/bookmarks";

    useEffect(() => {
    }, [bookmarksContent]);

    return (
        <Container>
            <PaginationList url={url} setContent={setBookmarksContent}></PaginationList>
            {(bookmarksContent === null) ?
                <p>Loading content...</p> :
                <>
                    {(bookmarksContent.length > 0) ?
                        <BookmarksList bookmarkList={bookmarksContent}></BookmarksList> :
                        <p>No bookmarks</p>}
                </>
            }
        </Container>
    );
};

export default BookmarksPage;