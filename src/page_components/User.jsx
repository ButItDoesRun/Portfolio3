import React from "react";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BookmarksPaginationList from "../base_components/BookmarksPaginationList";
import HistoryPaginationList from "../base_components/HistoryPaginationList";
import UserFacts from "../base_components/UserFacts";


const User = (props) =>
    <Container fluid>
        <h2>{props.user.username}</h2>
        <Tabs
            defaultActiveKey="facts"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="facts" title="Facts">
                <UserFacts user={props.user}/>
            </Tab>
            <Tab eventKey="bookmarks" title="Bookmarks">
                <BookmarksPaginationList bookmarksPagedList={props.bookmarks}/>
            </Tab>
            <Tab eventKey="history" title="Search History">
                <HistoryPaginationList historyPagedList={props.history} />
            </Tab>
        </Tabs>

    </Container>;

export default User;