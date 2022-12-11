import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext } from 'react';
import {
    Routes, Route, Link, NavLink, useParams, Outlet, Navigate
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import TokenContext from './Context/TokenContext';
import NavDropdown from 'react-bootstrap/NavDropdown';

//page imports
import LoginPage from './Pages/LoginPage';
import LogoutPage from "./Pages/LogoutPage";
import UserPage from "./Pages/UserPage";
import BookmarksPage from './Pages/BookmarksPage';
import RegisterPage from "./Pages/RegisterPage";
import HistoryPage from "./Pages/HistoryPage";
import MoviesPage from "./Pages/MoviesPage";
import TvShowsPage from "./Pages/TvShowsPage";
import ActorsPage from "./Pages/ActorsPage";
import TitlePage from "./Pages/TitlePage";
import TvShowPage from "./Pages/TvShowPage";
import PersonPage from "./Pages/PersonPage";
import TitleCastPage from "./Pages/TitleCastPage";
import TitleCrewPage from "./Pages/TitleCrewPage";
import SearchBar from "./PageComponents/SearchBarComponents/SearchPersonsList";
import RatingsPage from "./Pages/RatingsPage";
import BookmarksCreatePage from "./Pages/BookmarksCreatePage";
import BookmarksDeletePage from "./Pages/BookmarksDeletePage";
import BookmarksEditPage from "./Pages/BookmarksEditPage";
import HistoryDeletePage from "./Pages/HistoryDeletePage";
import UserEditPage from "./Pages/UserEditPage";
import UserDeletePage from "./Pages/UserDeletePage";
import WordCloudWord from "./PageComponents/WordCloudPageComponents/WordCloud";


const Error = () =>
    <div>404: Woops! I don't know that path</div>;

const AppRouting = () => {
    let [token, setToken] = useState(null);

    return (
        <>
            <TokenContext.Provider value={token}>
                { /*navbar*/}
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/home">OurMovieApp</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink className="btn" to="/search/:category/:search">Search</NavLink>
                            <NavLink className="btn" to="/titles/movies">Movies</NavLink>
                            <NavLink className="btn" to="/titles/tvshows">Tv Shows</NavLink>
                            <NavLink className="btn" to="/persons/actors">Actors</NavLink>
                            <NavDropdown title="User" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/user">User</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/user/bookmarks">Bookmarks</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/user/history">History</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/user/ratings">Ratings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {(token === null) ? 
                                <NavDropdown.Item as={Link} to="/user/login">Login</NavDropdown.Item> :
                                <NavDropdown.Item as={Link} to="/user/logout">Log out</NavDropdown.Item>  }
                                             
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>

                <div>
                    <br></br>
                </div>

                { /* ... and here is what happens when you click them */}
                <Routes>
                    {/* Routing for startpage */}
                    <Route path="/home" element={<p>This is home page</p>} />
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
                    <Route path="/search/:category/:search" element={<SearchBar/>} />

                    {/* <Route path="/search/actors/:search" element={<p>this is where the search actor element goes</p>} />
            <Route path="/search/titles/:search" element={<p>this is where the title search element goes</p>} />
            <Route path="/search/genres/:search" element={<p>this is where the genresmovieList element goes</p>} /> */}
                    <Route path="/title/:id" element={<TitlePage/>} />
                    <Route path="/title/tvshow/:id" element={<TvShowPage/>} />
                    <Route path="/title/cast/:id" element={<TitleCastPage/>} />
                    <Route path="/title/crew/:id" element={<TitleCrewPage/>} />
                    <Route path="/user/register" element={<RegisterPage/>} />
                    <Route path="/user/edit" element={<UserEditPage/>} />
                    <Route path="/user/delete" element={<UserDeletePage tokenSetter={setToken}/>} />
                    <Route path="/person/:id" element={<PersonPage/>} />
                    <Route path="/user/bookmarks/create/:id" element={<BookmarksCreatePage/>} />
                    <Route path="/user/bookmarks/delete/:id" element={<BookmarksDeletePage/>} />
                    <Route path="/user/bookmarks/edit/:id/:name" element={<BookmarksEditPage/>} />
                    <Route path="/user/history/delete" element={<HistoryDeletePage/>} />
                    <Route path="/person/wordcloud/:name" element={<p>Person wordcloud</p>} />
                    <Route path="/wordcloud/:word" element={<p>Word wordcloud</p>}/>

                    {/* Routing for errors*/}
                    <Route path="*" element={<Error />} />
                </Routes>
            </TokenContext.Provider>
        </>
    );
}
export default AppRouting;