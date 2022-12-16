import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import User from '../DataService/User';
import { useNavigate, Link } from "react-router-dom";
import TokenContext from '../Context/TokenContext';
import UserForm from '../PageComponents/UserPageComponents/UserForm';
import ValidateText from '../ValidationFunctions/ValidateText';
import ValidateEmail from '../ValidationFunctions/ValidateEmail';

async function EditUser(username, email, birthyear, token) {
    const user = new User(username, "Unknown", email, birthyear);
    const result = await user.UpdateUser(token);
    return (result);
};

const UserEditPage = () => {
    const token = useContext(TokenContext);
    const navigate = useNavigate();
    const startYear = "1980";
    const endYear = "2020";

    let [user, setUser] = useState(new User("Unknown", "Unknown", "Unknown", "Unknown"));
    let [email, setEmail] = useState("");
    let [birthyear, setBirthyear] = useState(startYear);
    let [isEdited, setIsEdited] = useState(null);

    useEffect(() => {
        if (token === null) {
            navigate("/home");
        }
        async function getUserObject(user, setUser, token) {
            if (token !== null && user.username === "Unknown")
                await user.GetUser(token, setUser);
        };
        getUserObject(user, setUser, token);
        setEmail(user.email);
        setBirthyear(user.birthYear);
    }, [token, user]);

    //validation
    let [emailFeedback, setEmailFeedback] = useState("");
    let [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const emailValidation = ValidateEmail(email);
        setEmailFeedback(emailValidation.feedback);

        if (emailValidation.Ok) {
            setIsValid(true);
        }
    }, [user.username, email]);

    useEffect(() => {
        if (isEdited === false) {
            alert("Error: User was not edited");
            navigate("/user/");
        }
        if (isEdited === true) {
            navigate("/user/");
        }
    }, [isEdited]);


    if (!isEdited) {
        return (
            <Container fluid>
                <UserForm
                    email={email} setEmail={setEmail}
                    birthyear={birthyear} setBirthyear={setBirthyear}
                    selectStartYear={startYear} selectEndYear={endYear}
                />
                <Row>
                    <p>{emailFeedback}</p>
                    <Col>
                        <Button variant="primary" onClick={async () => {
                            if (isValid) {
                                const result = await EditUser(user.username, email, birthyear, token);
                                setIsEdited(result);
                            } else {
                                alert("Please type a valid input");
                            }
                        }}>
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" as={Link} to="/user/">
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Container>);
    } else {
        return (
            <p>Successfully edited your account!</p>
        );
    }
};

export default UserEditPage;