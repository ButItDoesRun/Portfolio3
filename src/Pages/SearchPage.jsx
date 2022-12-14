import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import SearchGenresList from '../PageComponents/SearchPageComponents/SearchGenresList';
import SearchPersonsList from '../PageComponents/SearchPageComponents/SearchPersonsList';
import SearchTitlesList from '../PageComponents/SearchPageComponents/SearchTitlesList';
import TokenContext from '../Context/TokenContext';
import { useParams, useNavigate} from "react-router-dom";

const SearchPage = () => {
    const { category } = useParams();
    const { search } = useParams();
    const [searchContent, setSearchContent] = useState(null);
    // const [resourceUrl, setResourceUrl] = useState('');
    const url = `https://localhost:5001/api/search/${category}/${search}`;
    // let [searchUpdate, searchUpdate = useState(null)];

    const token = useContext(TokenContext);
    const navigate = useNavigate();

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

    }, [searchContent]);

    return (
        <Container>
            <p>{search}</p>
            <p>{category}</p>
            <p>{url}</p>
           

            <PaginationList url={url} setContent={setSearchContent}></PaginationList>
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
            {console.log(searchContent)}
        </Container>
    );
};

export default SearchPage;