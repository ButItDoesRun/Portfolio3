function ValidateText(text) {
    let feedback = "";
    let result = true;

    const allowedChars = /^[A-Za-z0-9@._-]+$/g;
    const containsOnlyAllowed = allowedChars.test(text);
    if (!containsOnlyAllowed) {
        feedback = "Special characters are not allowed";
        result = false;
    } 

    if(!text){
        feedback = ""; //feedback for empty input
        result = false;
    }

    return ({
        "feedback": feedback,
        "Ok": result,
    });
}

export default ValidateText;