import React from 'react';
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
    const [searchword, setSearchword] = useState('');
    const [category, setCategory] = useState('title');
    
    const handleSearch = (event) => {
        setSearchword(event.target.value);
    };

    const handleCategory = () => {
        const e = document.getElementById("categories");
         setCategory(e.options[e.selectedIndex].value);
    };

    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem", margin: "1rem"};
    return (
        <>
                
                <Form.Select onChange={handleCategory} id = "categories">
                    <option value = "title">Title</option>
                    <option value = "person">Person</option>
                    <option value = "genre">Genre</option>
                </Form.Select>

                <input 
                style={BarStyle}
                key="search-bar"
                onChange={handleSearch}
                value={searchword}
                placeholder={"search"}
                />

                <NavLink className="btn" to= {"search/"+ category + "/"+ searchword}>Search</NavLink>
      
        </>
    );
  }
  
  export default SearchBar;