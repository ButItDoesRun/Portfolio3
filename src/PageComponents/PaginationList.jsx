import React, { useContext, useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Paging from './Paging';
import GetPage from '../DataService/GetPage';
import TokenContext from '../Context/TokenContext';


const PaginationList = ({ url, setContent}) => {
    const token = useContext(TokenContext);
    const maxPageButtons = 20;
    let [page, setPage] = useState(1);
    console.log(page);
    let [pageSize, setPageSize] = useState(20);
    let [pageList, setPageList] = useState(null);

    useEffect(() => {
        async function getPageList(token, url, page, pageSize, setPageList) {
            if (token !== null)
                await GetPage(token, url, page, pageSize, setPageList);
        };
        getPageList(token, url, page, pageSize, setPageList);
        if (pageList !== null)
            setContent(() => pageList.items);
    }, [page, pageSize]);

    return (
        <Container fluid>
            {(pageList === null) ?
                <p>Loading...</p> :
                <Paging pageList={pageList} page={page} maxPageButtons={maxPageButtons} setPage={setPage}></Paging>
            }
        </Container>
    );
};

export default PaginationList;