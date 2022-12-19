import React, { useContext, useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Paging from './Paging';
import {GetPage} from '../DataService/GetPage';
import TokenContext from '../Context/TokenContext';


const PaginationList = ({ url, setContent}) => {
    const token = useContext(TokenContext);
    const maxPageButtons = 10;
    let [page, setPage] = useState(0);
    let [pageSize, setPageSize] = useState(20);
    let [pageList, setPageList] = useState(null);

    useEffect(() => {
        async function getPageList(token, url, page, pageSize) {
            if (token !== null){
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
                <Paging pageList={pageList} page={page} maxPageButtons={maxPageButtons} setPage={setPage}></Paging>
            }
        </Container>
    );
};

export default PaginationList;