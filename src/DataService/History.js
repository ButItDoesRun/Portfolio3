function DeleteHistory(token) {
    const url = "https://localhost:5001/api/user/history/delete";
    
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

export default DeleteHistory;