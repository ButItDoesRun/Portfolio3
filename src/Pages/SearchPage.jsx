// import React, { useEffect, useContext, useState } from 'react';
// import Container from "react-bootstrap/Container";
// import PaginationList from '../PageComponents/PaginationList';
// import BookmarksList from '../PageComponents/BookmarksPageComponents/BookmarksList';
// import TokenContext from '../Context/TokenContext';
// import { useNavigate } from "react-router-dom";

// const BookmarksPage = () => {
//     let [SearchContent, setSearchContent] = useState(null);
//     const url = "https://localhost:5001/api/user/bookmarks";
//     const token = useContext(TokenContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (token === null) {
//             navigate("/home");
//         }
//     }, []);

//     return (
//         <Container>
//             <PaginationList url={url} setContent={setBookmarksContent}></PaginationList>
//             {(bookmarksContent === null) ?
//                 <p>Loading content...</p> :
//                 <>
//                     {(bookmarksContent.length > 0) ?
//                         <BookmarksList bookmarkList={bookmarksContent}></BookmarksList> :
//                         <p>No bookmarks</p>}
//                 </>
//             }
//         </Container>
//     );
// };

// export default BookmarksPage;