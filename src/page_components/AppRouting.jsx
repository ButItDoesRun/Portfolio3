import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet, Navigate
  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import Container from "react-bootstrap/Container";


//json
import movies from '../json_files/GetMovies.json';
import tvshows from '../json_files/GetTvShows.json';
import actors from '../json_files/GetActors.json';
import user from '../json_files/GetUser.json';
import bookmarks from '../json_files/GetBookmarks.json';
import history from '../json_files/GetUserHistory.json';
import personSearch from '../json_files/SearchActor.json';
import friends from '../json_files/TvShowByIdFriends.json';
import genreSearch from '../json_files/SeachGenre.json';
import titleSearch from '../json_files/SearchTitle.json';
import movieCast from '../json_files/GetTitleCastMovie.json';
import tvShowCast from '../json_files/GetTitleCastTvShow.json';
import movieCrew from '../json_files/GetTitleCrewMovie.json';
import tvShowCrew from '../json_files/GetTitleCrewTvShow.json';
import title from '../json_files/TitleById.json';

//page components
import Search from './Search';
import Welcome from './Welcome';
import User from './User';
import TvShow from './TvShow';

// Components
import MoviePaginationList from '../base_components/MoviePaginationList';
import TvShowPaginationList from '../base_components/TvShowPaginationList';
import ActorsPaginationList from '../base_components/ActorsPaginationList';
import SearchPaginationList from '../base_components/SearchPaginationList';
import TitleCastList from "../base_components/TitleCastList";
import TitleCrewList from "../base_components/TitleCrewList";
import TitleById from '../base_components/TitleById';

const Error = () =>
  <div>404: Woops! I don't know that path</div>;

const AppRouting = () => {
    let [val, setVal] = useState([]);
    let [state, setState] = useState("");

    return(
        <>
        { /*navbar*/ }
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


        { /* ... and here is what happens when you click them */ }
        <Routes>
            {/* Routing for startpage */}
            <Route path="/home" element={<Welcome />} />
            <Route path="/" element={<Navigate replace to="/home" />} />

            {/* Routing for navbar */}
            <Route path="/titles/movies" element={<p>this is where the movieList element goes</p>} />
            <Route path="/titles/tvshows" element={<p>this is where the tvshowList element goes</p>} />
            <Route path="/persons/actors" element={<p>this is where the actorList element goes</p>} />
            <Route path="/user" element={<p>this is where the user dropdown element goes</p>} />

            {/* Routing for other components */}
            <Route path="/search/actors/:search" element={<p>this is where the search actor element goes</p>} />
            <Route path="/search/titles/:search" element={<p>this is where the title search element goes</p>} />
            <Route path="/search/genres/:search" element={<p>this is where the genresmovieList element goes</p>} />
            <Route path="/title/:id" element={<p>this is where the title element goes</p>} />
            <Route path="/title/tvshow/:id" element={<p>this is where the tvshow element goes</p>} />
            <Route path="/title/cast/:id" element={<p>this is where the movieCast element goes</p>} />     
            <Route path="/title/crew/:id" element={<p>this is where the movieCrew element goes</p>} />
     


            {/* Routing for errors*/}
            <Route path="*" element={<Error />} />
        </Routes>

        </>
        );
}
export default AppRouting;