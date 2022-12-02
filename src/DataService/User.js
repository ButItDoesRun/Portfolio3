class User {
    constructor(username, password, email, birthYear) {
        // constructor
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthYear = birthYear;
    }

    RegisterUser() {
        const user = this;
        const requestContent = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        };
        // console.log(JSON.stringify(user))  

        fetch("https://localhost:5001/api/user/register", requestContent)
            .then(res => console.log(res))
            .catch(e => console.log(e));
    };

    async LoginUser() {
        const user = {
            username: this.username,
            password: this.password,
        }
        const requestContent = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        };

        try {
            const res = await fetch("https://localhost:5001/api/user/login", requestContent);
            const json = await res.json();
            return (json.token);
        } catch (e) {
            console.log(e);
            return (null);
        }
    };
}

export default User;