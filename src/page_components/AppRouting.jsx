import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
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
            <Navbar.Brand href="/api">OurMovieApp</Navbar.Brand>
            <Nav className="me-auto">
                <NavItem><Search></Search></NavItem>
                <NavLink className="btn" to="/api/titles/movies">Movies</NavLink>
                <NavLink className="btn" to="/api/titles/tvshows">Tv Shows</NavLink>
                <NavLink className="btn" to="/api/persons/actors">Actors</NavLink>
                <NavLink className="btn" to="/api/user">User</NavLink>
            </Nav>
            </Container>
        </Navbar>

        <div>
            <br></br>   
        </div>


        { /* ... and here is what happens when you click them */ }
        <Routes>
            {/* Routing for navbar */}
            <Route path="/api" element={<Welcome />} />
            <Route path="/api/titles/movies" element={<MoviePaginationList moviesPagedList={movies}/>} />
            <Route path="/api/titles/tvshows" element={<TvShowPaginationList tvshowsPagedList={tvshows} />} />
            <Route path="/api/persons/actors" element={<ActorsPaginationList actorsPagedList={actors} />} />
            <Route path="/api/user" element={<User user={user} history={history} bookmarks={bookmarks}></User>} />

            {/* Routing for other components */}
            <Route path="/api/search/actors/:search" element={<SearchPaginationList searchPagedList={personSearch}></SearchPaginationList>} />
            <Route path="/api/search/titles/:search" element={<SearchPaginationList searchPagedList={titleSearch}></SearchPaginationList>} />
            <Route path="/api/search/genres/:search" element={<SearchPaginationList searchPagedList={genreSearch}></SearchPaginationList>} />
            <Route path="/api/title/:id" element={<TitleById title={title}></TitleById>} />
            <Route path="/api/title/tvshow/:id" element={<TvShow tvShow={friends}></TvShow>} />
            <Route path="/api/title/cast/:id" element={<TitleCastList titleCast = {movieCast}></TitleCastList>} />     
            {/* <Route path="/api/title/cast/:id" element={<TitleCastList titleCast = {tvShowCast}></TitleCastList>} /> */}
            <Route path="/api/title/crew/:id" element={<TitleCrewList titleCrew = {movieCrew}></TitleCrewList>} />
            {/* <Route path="/api/title/crew/:id" element={<TitleCrewList titleCrew = {tvShowCrew}></TitleCrewList>} /> */}
     


            {/* Routing for errors*/}
            <Route path="*" element={<Error />} />
        </Routes>

        </>
        );
}
export default AppRouting;