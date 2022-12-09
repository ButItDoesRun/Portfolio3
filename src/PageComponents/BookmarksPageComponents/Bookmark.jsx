import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Bookmark = ({ bookmark }) => {
    const lastSegment = bookmark.url.split("/").pop();
    let url;
    if (lastSegment.includes("t")) {
        url = "/title/" + lastSegment;
    } else if (lastSegment.includes("n")) {
        url = "/person/" + lastSegment;
    }

    return (
        <NavLink as={Link} to={url}>{bookmark.name}</NavLink>
    );
};

export default Bookmark;