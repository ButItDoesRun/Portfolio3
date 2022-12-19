import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext, Component} from 'react';
import {
    Routes, Route, Link, NavLink, useParams, Outlet, Navigate
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import TokenContext from './Context/TokenContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//page imports
import LoginPage from './Pages/LoginPage';
import LogoutPage from "./Pages/LogoutPage";
import RegisterPage from "./Pages/RegisterPage";

import UserPage from "./Pages/UserPage";
import UserEditPage from "./Pages/UserEditPage";
import UserDeletePage from "./Pages/UserDeletePage";

import BookmarksPage from './Pages/BookmarksPage';
import BookmarksCreatePage from "./Pages/BookmarksCreatePage";
import BookmarksDeletePage from "./Pages/BookmarksDeletePage";
import BookmarksEditPage from "./Pages/BookmarksEditPage";

import HistoryPage from "./Pages/HistoryPage";
import HistoryDeletePage from "./Pages/HistoryDeletePage";

import RatingsPage from "./Pages/RatingsPage";
import RatingsDeletePage from "./Pages/RatingsDeletePage";

import MoviesPage from "./Pages/MoviesPage";
import TvShowsPage from "./Pages/TvShowsPage";
import ActorsPage from "./Pages/ActorsPage";
import TitlePage from "./Pages/TitlePage";
import TvShowPage from "./Pages/TvShowPage";
import PersonPage from "./Pages/PersonPage";
import TitleCastPage from "./Pages/TitleCastPage";
import TitleCrewPage from "./Pages/TitleCrewPage";

import SearchPage from "./Pages/SearchPage";
import SearchBar from "./PageComponents/SearchPageComponents/SearchBar";

import WelcomePage from "./Pages/WelcomePage";

import WordCloudPersonPage from "./Pages/WordCloudPersonPage";
import WordCloudWordPage from "./Pages/WordCloudWordPage";


const Error = () =>
    <div>404: Woops! I don't know that path</div>;

const ShowUserMenu = () => {

    return(
        <>
        <NavDropdown.Item as={Link} to="/user">User</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/user/bookmarks">Bookmarks</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/user/history">History</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/user/ratings">Ratings</NavDropdown.Item>
        <NavDropdown.Divider />
        </>
    );
}


const AppRouting = () => {
    let [token, setToken] = useState(null);

    return (
        <>
            <TokenContext.Provider value={token}>
                { /*navbar*/}
                <Navbar bg="dark" variant="dark">
                    <Container fluid id = "navContainer">
                        <Nav>
                            <Row>

                            <Col md = "auto"> 
                                <Navbar.Brand  as={Link} to="/home" >OurMovieApp</Navbar.Brand>
                            </Col>


                                                     

                            {(token !== null) ? 
                                <Col md = "auto">  
                                <SearchBar></SearchBar>
                                </Col>  :
                                null
                            }
                            
                     
                            <Col md = "auto"> 
                            <NavLink className="inactive" activeClassName="active" to="/titles/movies">Movies</NavLink>
                            </Col> 
                            
                            <Col md = "auto"> 
                            <NavLink className="inactive" activeClassName="active" to="/titles/tvshows">TvShows</NavLink>
                            </Col> 

                            <Col md = "auto"> 
                            <NavLink className="inactive" activeClassName="active" to="/persons/actors">Actors</NavLink>
                            </Col>  

                            <Col md = "auto"> 
                            <NavDropdown title="User" id="nav-dropdown">
                                {(token !== null)?
                                ShowUserMenu()
                                : null
                                }
                                {(token === null) ? 
                                <NavDropdown.Item as={Link} to="/user/login">Login</NavDropdown.Item> :
                                <NavDropdown.Item as={Link} to="/user/logout">Log out</NavDropdown.Item>  }
                                             
                            </NavDropdown>
                            </Col> 

                            </Row>
                        </Nav>
                    </Container>
                </Navbar>

                <div>
                    <br></br>
                </div>

                { /* ... and here is what happens when you click them */}
                <Routes>
                    {/* Routing for startpage */}
                    <Route path="/home" element={<WelcomePage></WelcomePage>} />   
                    <Route path="/" element={<Navigate replace to="/home" />} />

                    {/* Routing for navbar */}
                    <Route path="/titles/movies" element={<MoviesPage/>} />
                    <Route path="/titles/tvshows" element={<TvShowsPage/>} />
                    <Route path="/persons/actors" element={<ActorsPage/>} />
                    <Route path="/user" element={<UserPage/>} />
                    <Route path="/user/bookmarks" element={<BookmarksPage/>} />
                    <Route path="/user/history" element={<HistoryPage/>} />
                    <Route path="/user/ratings" element={<RatingsPage/>} />
                    <Route path="/user/logout" element={<LogoutPage tokenSetter={setToken}/>} />
                    <Route path="/user/login" element={<LoginPage tokenSetter={setToken}/>} />


                    {/* Routing for other components */}
                    <Route path="/user/delete" element={<UserDeletePage/>} />
                    <Route path="/search/:category/:search" element={<SearchPage/> } />                    
                    <Route path="/title/:id" element={<TitlePage/>} />
                    <Route path="/title/tvshow/:id" element={<TvShowPage/>} />
                    <Route path="/title/cast/:id" element={<TitleCastPage/>} />
                    <Route path="/title/crew/:id" element={<TitleCrewPage/>} />
                    <Route path="/user/register" element={<RegisterPage/>} />
                    <Route path="/user/edit" element={<UserEditPage/>} />
                    <Route path="/person/:id" element={<PersonPage/>} />
                    <Route path="/user/bookmarks/create/:id" element={<BookmarksCreatePage/>} />
                    <Route path="/user/bookmarks/delete/:id" element={<BookmarksDeletePage/>} />
                    <Route path="/user/bookmarks/edit/:id/:name" element={<BookmarksEditPage/>} />
                    <Route path="/user/history/delete" element={<HistoryDeletePage/>} />
                    <Route path="/user/ratings/delete/:id" element={<RatingsDeletePage/>} />
                    <Route path="/person/wordcloud/:name" element={<WordCloudPersonPage/>} />
                    <Route path="/wordcloud/:word" element={<WordCloudWordPage/>}/>
                    

                    {/* Routing for errors*/}
                    <Route path="*" element={<Error />} />
                </Routes>
            </TokenContext.Provider>
        </>
    );
}
export default AppRouting;