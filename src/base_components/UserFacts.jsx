import React from 'react';
import Container from "react-bootstrap/Container";

const UserFacts = ({ user }) =>
    <Container fluid>
        <h3>User</h3>
        <p>Name: {user.username}</p>
        <p>Birthyear: {user.birthyear}</p>
        <p>Email: <a href='mailto:{user.email}'> {user.email}</a></p>
    </Container>;

export default UserFacts;