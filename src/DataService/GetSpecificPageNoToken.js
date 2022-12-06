async function GetSpecificPageNoToken(url) {
    if (url != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        try {
            const res = await fetch(url, requestContent);
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

export default GetSpecificPageNoToken;