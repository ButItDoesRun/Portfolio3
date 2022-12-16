import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import User from '../DataService/User';
import RegisterForm from '../PageComponents/RegisterPageComponents/RegisterForm';
import ValidateEmail from '../ValidationFunctions/ValidateEmail';
import ValidatePassword from '../ValidationFunctions/ValidatePassword';
import ValidateText from '../ValidationFunctions/ValidateText';
import { Alert } from 'react-bootstrap';

async function RegisterUser(username, password, email, birthyear) {
    const user = new User(username, password, email, birthyear);
    const result = await user.RegisterUser();
    return (result);
};

const RegisterPage = () => {
    const startYear = "1980";
    const endYear = "2020";

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [birthyear, setBirthyear] = useState(startYear);
    let [isRegistered, setIsRegistered] = useState(null);

    //validation
    let [passwordFeedback, setPasswordFeedback] = useState("");
    let [emailFeedback, setEmailFeedback] = useState("");
    let [usernameFeedback, setUsernameFeedback] = useState("");
    let [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const passwordValidation = ValidatePassword(password);
        setPasswordFeedback(passwordValidation.feedback);

        const emailValidation = ValidateEmail(email);
        setEmailFeedback(emailValidation.feedback);

        const usernameValidation = ValidateText(username);
        setUsernameFeedback(usernameValidation.feedback);

        if (emailValidation.Ok && passwordValidation.Ok && usernameValidation.Ok) {
            setIsValid(true);
        }
    }, [username, password, email]);

    useEffect(() => {
        if (isRegistered === false) {
            alert("Registration failed, please retry");
        }
    }, [isRegistered]);

    if (!isRegistered) {
        return (
            <Container fluid>
                <RegisterForm
                    username={username} setUsername={setUsername}
                    password={password} setPassword={setPassword}
                    birthyear={birthyear} setBirthyear={setBirthyear}
                    selectStartYear={startYear} selectEndYear={endYear}
                    email={email} setEmail={setEmail}
                />
                <Row>
                    <Col>
                    <p>{usernameFeedback}</p>
                    <p>{emailFeedback}</p>
                    <p>{passwordFeedback}</p>
                        <Button variant="primary" onClick={async () => {
                            if (isValid) {
                                const result = await RegisterUser(username, password, email, birthyear);
                                setIsRegistered(result);
                            } else {
                                alert("Please type a valid input");
                            }
                        }}>
                            Register
                        </Button>
                    </Col>
                </Row>

            </Container>);
    } else {
        return (
            <p>Successfully registered your account!</p>
        );
    }
};

export default RegisterPage;