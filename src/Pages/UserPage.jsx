import React, { useContext, useEffect, useState } from 'react';
import TokenContext from '../Context/TokenContext';
import Container from "react-bootstrap/Container";
import User from '../DataService/User';

const UserPage = () => {
    let [user, setUser] = useState(new User("Unknown", "Unknown", "Unknown", "Unknown"));
    const token = useContext(TokenContext);

    useEffect(() => {
        async function getUserObject(user, setUser, token){
            await user.GetUser(token, setUser);
        };
        getUserObject(user, setUser, token);
    }, [token]);

    return (
        <Container>
            <p>Username is: {user.username}</p>

        </Container>
    );
};

export default UserPage;