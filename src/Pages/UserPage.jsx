import React, { useContext, useEffect, useState } from 'react';
import TokenContext from '../Context/TokenContext';

import Container from "react-bootstrap/Container";

async function getUser(token, setUser) {
    if (token != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+token,
            },
        };
        console.log(requestContent);
        try {
            const res = await fetch("https://localhost:5001/api/user ", requestContent);
            const json = await res.json();
            setUser(user => json);
        } catch (e) {
            console.log(e);
            setUser(null);
        }
    } else {
        setUser(null);
    }

}

const UserPage = () => {
    let [user, setUser] = useState({});
    const token = useContext(TokenContext);

    useEffect(() => {
        getUser(token, setUser);
    },[token])

    return (
        <Container>
            <p>Token is: {token}</p>

            <p>Username is: {"user"}
            </p>
            {/* <User user="" bookmarks="" history=""></User> */}
        </Container>
    );
};

export default UserPage;