class Rating {
    constructor(id, rating) {
        // constructor
        this.id = id;
        this.rating = rating;
    }

    CreateRating(token) {
        const rating = this;
        const base = "https://localhost:5001/api/user/ratings/create/";
        let url = base + rating.id;
        if (this.rating !== null && this.id !== null) {
            url += "/" + rating.rating;
        }
        
        if (token != null) {
            const requestContent = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            };

            const result = fetch(url, requestContent)
                .then(res => {
                    return (res.ok);
                })
                .catch(e => {
                    console.log(e);
                    return (false);
                });

            return (result);
        }
        return(false);
    };

    DeleteRating(token) {
        const rating = this;
        const base = "https://localhost:5001/api/user/ratings/delete/";
        let url = base + rating.id;
        
        if (token != null) {
            const requestContent = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            };

            const result = fetch(url, requestContent)
                .then(res => {
                    return (res.ok);
                })
                .catch(e => {
                    console.log(e);
                    return (false);
                });

            return (result);
        }
        return(false);
    };
}

export default Rating;