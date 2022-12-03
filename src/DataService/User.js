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

    async GetUser(token, setUser) {
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
                setUser(json);
                
            } catch (e) {
                console.log(e);
                setUser(new User("Unknown","Unknown","Unknown","Unknown"));
            }
        } else {
            setUser(new User("Unknown","Unknown","Unknown","Unknown"));
        }
    }    
}

export default User;