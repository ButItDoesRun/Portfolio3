import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";

const Logout = ({ tokenSetter }) => {
    useEffect(() => {
        tokenSetter(null);
    },[]);
    
    return (
        <Container fluid>
            <p>Successfully logged out</p>
        </Container >
    );
};

export default Logout;