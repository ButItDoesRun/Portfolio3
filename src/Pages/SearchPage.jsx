import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paging from '../PageComponents/Paging';
import PageSizeSelector from '../PageComponents/PageSizeSelector';
import SearchGenresList from '../PageComponents/SearchPageComponents/SearchGenresList';
import SearchPersonsList from '../PageComponents/SearchPageComponents/SearchPersonsList';
import SearchTitlesList from '../PageComponents/SearchPageComponents/SearchTitlesList';
import TokenContext from '../Context/TokenContext';
import { useParams, useNavigate} from "react-router-dom";
import {GetPage} from '../DataService/GetPage';

const SearchPage = () => {
    const token = useContext(TokenContext);
    const navigate = useNavigate();
    const maxPageButtons = 20;
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [pageList, setPageList] = useState(null);
    const [searchContent, setSearchContent] = useState(null);
    const { category } = useParams();
    const { search } = useParams();
    const url = `https://localhost:5001/api/search/${category}/${search}`;


    const displaySearchComponent = (searchContent) => {
      
        if(category === "titles"){
            return (<SearchTitlesList searchTitlesList={searchContent}></SearchTitlesList>);
        }

        if(category === "actors"){
            return(<SearchPersonsList searchPersonsList={searchContent}></SearchPersonsList>);
        }

        if(category === "genres"){
            return(<SearchGenresList searchGenresList={searchContent}></SearchGenresList>);
        }  

    };

    useEffect(() => {
        if (token === null) {
            navigate("/user/login");
            alert("Log in to use search feature");
        }

        async function getPageList(token, url, page, pageSize) {
            if (token !== null){
                const json = await GetPage(token, url, page, pageSize);
                setPageList(json);
                setSearchContent(json.items);             
            }
        };

        getPageList(token, url, page, pageSize);


    }, [searchContent,page, pageSize]);

    return (
        <Container>
            <Container fluid>
                {(pageList === null) ?
                    <p>Loading...</p> :
                    <Row>
                    <Col>
                        <Paging pageList={pageList} page={page} maxPageButtons={maxPageButtons} setPage={setPage}></Paging>
                    </Col>
                    <Col>
                        <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize}></PageSizeSelector>
                    </Col>                
                </Row>
                    
                }
            </Container>
           
            {(searchContent === null) ?
                <p>Loading content...</p> :
                <>
                    {(searchContent.length > 0) ?
                        displaySearchComponent(searchContent)     
                    :
                    <p>Search not found</p> 

                    }
                </>                
            }
        </Container>
    );
};

export default SearchPage;