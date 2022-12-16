import ValidateText from "./ValidateText";

function ValidateEmail(text) {
    let feedback = "";
    let result = true;

    const validText = ValidateText(text);
    if (!validText.Ok) {
        return (validText);
    }

    const at = new RegExp('@');
    const containsAt = at.test(text);
    const containsDot = text.includes('.') ? true : false;
    if (!containsAt || !containsDot) {
        feedback = "Please input a valid email";
        result = false;
    }


    return ({
        "feedback": feedback,
        "Ok": result,
    });
}

export default ValidateEmail;