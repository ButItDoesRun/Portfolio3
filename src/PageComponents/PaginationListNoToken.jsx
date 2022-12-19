import React, { useContext, useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Paging from './Paging';
import {GetPageNoToken} from '../DataService/GetPage';


const PaginationListNoToken = ({ url, setContent}) => {
    const maxPageButtons = 10;
    let [page, setPage] = useState(0);
    let [pageSize, setPageSize] = useState(20);
    let [pageList, setPageList] = useState(null);

    useEffect(() => {
        async function getPageList(url, page, pageSize) {
            if (url !== null){
                const json = await GetPageNoToken(url, page, pageSize);
                setPageList(json);
                setContent(json.items);
            }
        };
        setContent(null);
        getPageList(url, page, pageSize);
    }, [page, pageSize]);

    return (
        <Container fluid>
            {(pageList === null) ?
                <p>Loading...</p> :
                <Paging id="pag" pageList={pageList} page={page} maxPageButtons={maxPageButtons} setPage={setPage}></Paging>
            }
        </Container>
    );
};

export default PaginationListNoToken;