import './App.css';
//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
//import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import { NavItem } from 'react-bootstrap';

// Pages
import TvShow from './page_components/TvShow';
import Search from './page_components/Search';
import User from './page_components/User';

// Json
import friends from './json_files/TvShowByIdFriends.json';
import user from './json_files/GetUser.json';
import bookmarks from './json_files/GetBookmarks.json';
import genreSearch from './json_files/SeachGenre.json';
import titleSearch from './json_files/SearchTitle.json';
import personSearch from './json_files/SearchActor.json';
import history from './json_files/GetUserHistory.json';
import actors from './json_files/GetActors.json';
import movies from './json_files/GetMovies.json';
import movieCast from './json_files/GetTitleCastMovie.json';
import tvShowCast from './json_files/GetTitleCastTvShow.json';
import movieCrew from './json_files/GetTitleCrewMovie.json';
import tvShowCrew from './json_files/GetTitleCrewTvShow.json';
import title from './json_files/TitleById.json';
import tvshows from './json_files/GetTvShows.json';

// Components
import UserFacts from './base_components/UserFacts';
import BookmarksPaginationList from './base_components/BookmarksPaginationList';
import Paging from './base_components/Paging';
import HistoryList from './base_components/HistoryList';
import HistoryPaginationList from './base_components/HistoryPaginationList';
import SearchTitlesList from './base_components/SearchTitlesList';
import SearchPersonsList from './base_components/SearchPersonsList';
import SearchPaginationList from './base_components/SearchPaginationList';
import ActorList from "./base_components/ActorList";
import ActorsPaginationList from './base_components/ActorsPaginationList';
import MoviesList from "./base_components/MoviesList";
import MoviePaginationList from './base_components/MoviePaginationList';
import TitleCastList from "./base_components/TitleCastList";
import TitleCrewList from "./base_components/TitleCrewList";
import TitleById from './base_components/TitleById';
import TvShowPaginationList from './base_components/TvShowPaginationList';





function App() {
  let [val, setVal] = useState([]);
  let [state, setState] = useState("");

  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick ={() => {setState("none")}}>OurMovieApp</Navbar.Brand>
          <Nav className="me-auto">
            <NavItem><Search></Search></NavItem>
            <Nav.Link href="#movie" 
            onClick ={() => {setState("movies")}} >Movie</Nav.Link>
            <Nav.Link href="#tvshow">Tv Show</Nav.Link>
            <Nav.Link href="#actors">Actors</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <div>
        <br></br>
        <br></br>      
      </div>


    {
      state === "movies"?
          <div className='App'>
            <MoviePaginationList moviesPagedList={movies} />
          </div>

          : null
        
    }





      <div className='App'>

        {/* {checkState(state)} */}

       

        
      {/* <TvShow tvShow={friends}></TvShow> */}
      {/* <User user={user} history={history} bookmarks={bookmarks}></User> */}

        {/* <Search></Search> */}
        {/* <SearchPaginationList searchPagedList={titleSearch}></SearchPaginationList> */}
        {/* <SearchPaginationList searchPagedList={genreSearch}></SearchPaginationList> */}
        {/* <SearchPaginationList searchPagedList={personSearch}></SearchPaginationList> */}

        {/* <UserFacts user={user}></UserFacts> */}
        {/* {history.items[1].content} */}
        {/* <HistoryList historyList={history.items}></HistoryList> */}
      {/* <BookmarksPaginationList bookmarksPagedList={bookmarks} /> */}
      {/* <HistoryPaginationList historyPagedList={history}/> */}

      {/* <ActorsPaginationList actorsPagedList={actors} /> */}
      {/* <MoviePaginationList moviesPagedList={movies} /> */}
      {/* <TitleCastList titleCast = {movieCast}></TitleCastList> */}
      {/* <TitleCastList titleCast = {tvShowCast}></TitleCastList> */}
      {/* <TitleCrewList titleCrew = {movieCrew}></TitleCrewList> */}
      {/* <TitleCrewList titleCrew = {tvShowCrew}></TitleCrewList> */}
      {/* <TitleById title={title}></TitleById> */}

      {/* <TvShowPaginationList tvshowsPagedList={tvshows} /> */}


      </div>


    </>
  );
}

export default App;
