import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";

const LogoutPage = ({ tokenSetter }) => {
    useEffect(() => {
        tokenSetter(null);
    },[]);
    
    return (
        <Container fluid>
            <p>Successfully logged out</p>
        </Container >
    );
};

export default LogoutPage;