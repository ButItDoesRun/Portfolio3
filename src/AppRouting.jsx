import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import {
    Routes, Route, Link, NavLink, useParams, Outlet, Navigate
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import TokenContext from './Context/TokenContext';

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
                            <NavLink className="btn" to="/search">Search</NavLink>
                            <NavLink className="btn" to="/titles/movies">Movies</NavLink>
                            <NavLink className="btn" to="/titles/tvshows">Tv Shows</NavLink>
                            <NavLink className="btn" to="/persons/actors">Actors</NavLink>
                            <NavLink className="btn" to="/user">User</NavLink>
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
                    <Route path="/titles/movies" element={<p>this is where the movieList element goes</p>} />
                    <Route path="/titles/tvshows" element={<p>this is where the tvshowList element goes</p>} />
                    <Route path="/persons/actors" element={<p>this is where the actorList element goes</p>} />
                    <Route path="/user" element={<p>this is where the user dropdown element goes</p>} />

                    {/* Routing for other components */}
                    <Route path="/search" element={<p>This is where search element goes</p>} />
                    {/* <Route path="/search/actors/:search" element={<p>this is where the search actor element goes</p>} />
            <Route path="/search/titles/:search" element={<p>this is where the title search element goes</p>} />
            <Route path="/search/genres/:search" element={<p>this is where the genresmovieList element goes</p>} /> */}
                    <Route path="/title/:id" element={<p>this is where the title element goes</p>} />
                    <Route path="/title/tvshow/:id" element={<p>this is where the tvshow element goes</p>} />
                    <Route path="/title/cast/:id" element={<p>this is where the movieCast element goes</p>} />
                    <Route path="/title/crew/:id" element={<p>this is where the movieCrew element goes</p>} />

                    {/* Routing for errors*/}
                    <Route path="*" element={<Error />} />
                </Routes>
            </TokenContext.Provider>
        </>
    );
}
export default AppRouting;