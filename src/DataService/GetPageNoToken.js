async function GetPageNoToken(url, page, pageSize) {
    if (url != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        const pagingUrl = url + "?page=" + page + "&pageSize="+pageSize;
        try {
            const res = await fetch(pagingUrl, requestContent);
            const json = await res.json();
            return(json);

        } catch (e) {
            console.log(e);
            return(null);
        }
    } else {
        return(null);
    }
}

export default GetPageNoToken;