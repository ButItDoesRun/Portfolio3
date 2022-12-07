class Bookmark {
    constructor(id, name) {
        // constructor
        this.id = id;
        this.name = name;
    }

    CreateBookmark(token) {
        const bookmark = this;
        const base = "https://localhost:5001/api/user/bookmarks/create/";
        let url = base + bookmark.id;
        if (this.name !== null) {
            url += "/" + bookmark.name;
        }
        
        console.log("token is "+token);
        if (token != null) {
            const requestContent = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            };

            const result = fetch(url, requestContent)
                .then(res => {
                    console.log(res);
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

export default Bookmark;