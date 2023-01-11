import React, { useContext, useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paging from './Paging';
import PageSizeSelector from './PageSizeSelector';
import { GetPage } from '../DataService/GetPage';
import TokenContext from '../Context/TokenContext';

const PaginationList = ({ url, setContent }) => {
    const token = useContext(TokenContext);
    const maxPageButtons = 10;
    let [page, setPage] = useState(0);
    let [pageSize, setPageSize] = useState(20);
    let [pageList, setPageList] = useState(null);

    useEffect(() => {
        async function getPageList(token, url, page, pageSize) {
            if (token !== null) {
                const json = await GetPage(token, url, page, pageSize);
                setPageList(json);
                setContent(json.items);
            }
        };
        setContent(null);
        getPageList(token, url, page, pageSize);
    }, [page, pageSize]);

    return (
        <Container fluid>
            {(pageList === null) ?
                <p>Loading...</p> :
                <>
                    <Row>
                        <Col>
                            <Paging pageList={pageList} page={page} maxPageButtons={maxPageButtons} setPage={setPage}></Paging>
                        </Col>
                        <Col>
                            <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize}></PageSizeSelector>
                        </Col>
                    </Row>
                </>
            }
        </Container>
    );
};

export default PaginationList;