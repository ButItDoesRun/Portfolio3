import ValidateText from "./ValidateText";

function ValidatePassword(password) {
    let feedback = "";
    let result = true;

    const validText = ValidateText(password);
    if (!validText.Ok) {
        return (validText);
    }

    const numbers = new RegExp('[0-9]');
    const containsNumbers = numbers.test(password);
    const characters = new RegExp('[^0-9]');
    const containsCharacters = characters.test(password);
    
    if (!containsNumbers || !containsCharacters ) {
        feedback = "Please type a password that contains both numbers and characters";
        result = false;
    }

    const isMinimumLength = (password.length >= 8) ? true : false;
    if(!isMinimumLength){
        feedback = "Please input a password that is at least 8 characters";
        result = false;
    }

    return({
        "feedback" : feedback,
        "Ok" : result,
    });
}

export default ValidatePassword;