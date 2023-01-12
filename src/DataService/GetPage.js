async function GetPage(token, url, page, pageSize) {
    if (token != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
        };
        if (pageSize === ""){
            pageSize = 20;
        }
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


async function GetPageNoToken(url, page, pageSize) {
    if (url != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        if (pageSize === ""){
            pageSize = 20;
        }
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

export {
    GetPage,
    GetSpecificPageNoToken,
    GetPageNoToken
}
// export default GetPage;