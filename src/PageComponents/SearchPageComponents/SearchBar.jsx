import React from 'react';
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

const SearchBar = () => {
    const [searchword, setSearchword] = useState('');
    const [category, setCategory] = useState('titles');
    
    const handleSearch = (event) => {
        setSearchword(event.target.value);
    };

    const handleCategory = () => {
        const e = document.getElementById("categories");
         setCategory(e.options[e.selectedIndex].value);
    };
    

    const BarStyle = 
    {width:"20rem",
    background:"#edf3f7", 
    border:"1rem", 
    padding:"0.5rem", 
    margin: "1rem"
    };
    return (
        <>

                
                <Form.Select onChange={handleCategory} id = "categories">
                    <option value = "titles">Title</option>
                    <option value = "actors">Person</option>
                    <option value = "genres">Genre</option>
                </Form.Select>

                <input 
                style={BarStyle}
                key="search-bar"
                onChange={handleSearch}
                value={searchword}
                placeholder={"search"}
                />
                    
               
                <NavLink className="inactive" activeClassName="active" to= {"search/"+ category + "/"+ searchword}>Search</NavLink>
        </>
    );
  }
  
  export default SearchBar;