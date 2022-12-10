import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import HistoryList from '../PageComponents/HistoryPageComponents/HistoryList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HistoryDeleteButton from '../PageComponents/HistoryPageComponents/HistoryDeleteButton';

const HistoryPage = () => {
    let [historyContent, setHistoryContent] = useState(null);
    const url = "https://localhost:5001/api/user/history";

    return (
        <Container>
            <Row>
                <Col>
                    <PaginationList url={url} setContent={setHistoryContent}></PaginationList>
                </Col>
                <Col md="auto">
                    <HistoryDeleteButton></HistoryDeleteButton>
                </Col>
            </Row>
            <Row>
                {(historyContent === null) ?
                    <p>Loading content...</p> :
                    <>
                        {(historyContent.length > 0) ? 
                        <HistoryList historyList={historyContent} /> :
                        <p>User history is empty</p> }
                    </>
                }

            </Row>
        </Container>
    );
};

export default HistoryPage;