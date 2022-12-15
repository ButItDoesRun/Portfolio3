async function GetWordCloudPerson(name, setWords) {
    const requestContent = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const url = "https://localhost:5001/api/person/wordcloud/" + name;
    try {
        const res = await fetch(url, requestContent);
        const json = await res.json();
        setWords(json);

    } catch (e) {
        console.log(e);
        setWords(null);
    }

}

async function GetWordCloudWord(word, setWords) {
    const requestContent = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const url = "https://localhost:5001/api/wordcloud/" + word;
    try {
        const res = await fetch(url, requestContent);
        const json = await res.json();
        setWords(json);
        
    } catch (e) {
        console.log(e);
        setWords(null);
    }

}

export {
    GetWordCloudPerson,
    GetWordCloudWord
}
