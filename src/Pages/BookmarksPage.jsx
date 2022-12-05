import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import BookmarksList from '../PageComponents/BookmarksPageComponents/BookmarksList';

const BookmarksPage = () => {
    let [bookmarksContent, setBookmarksContent] = useState(null);
    const url = "https://localhost:5001/api/search/actors/johan"; //tester url
    console.log(bookmarksContent);

    useEffect(() => {
        console.log(bookmarksContent)
    }, [bookmarksContent]);

    return (
        <Container>
            <PaginationList url={url} setContent={setBookmarksContent}></PaginationList>
            {(bookmarksContent === null) ?
                <p>Loading content...</p> :
                <BookmarksList bookmarkList={bookmarksContent}></BookmarksList>
            }
        </Container>
    );
};

export default BookmarksPage;