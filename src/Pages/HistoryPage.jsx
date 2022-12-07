import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import HistoryList from '../PageComponents/HistoryPageComponents/HistoryList';

const HistoryPage = () => {
    let [historyContent, setHistoryContent] = useState(null);
    const url = "https://localhost:5001/api/user/history"; 

    useEffect(() => {
    }, [historyContent]);

    return (
        <Container>
            <PaginationList url={url} setContent={setHistoryContent}></PaginationList>
            {(historyContent === null) ?
                <p>Loading content...</p> :
                <HistoryList historyList={historyContent}/>
            }
        </Container>
    );
};

export default HistoryPage;