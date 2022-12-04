async function GetBookmarks(token, setBookmarks) {
    if (token != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
        };
        try {
            const res = await fetch("https://localhost:5001/api/user/bookmarks", requestContent);
            const json = await res.json();
            setBookmarks(json);

        } catch (e) {
            console.log(e);
            setBookmarks(null);
        }
    } else {
        setBookmarks(null);
    }
}

export default GetBookmarks;






