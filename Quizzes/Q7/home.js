/* When the user enters submit button, you should validate the user inputs as following 
First name and last name can not have any digists or special charcters 
Age must be a number between 1 to 120 
email adress must include @utdallas.edu 
If the user inputs are valid display all user inputs . Otherwise, inform the user that the inputs are not valid  */
function validateInfo() {
    var f, l, a, e, text;
    // Get the value of the input field
    f = document.getElementById("firstname").value;
    l = document.getElementById("lastname").value;
    a = document.getElementById("age").value;
    e = document.getElementById("email").value;

    text = "Name: " + f + " " + l + "<br>Age: " + a + "<br>Email: " + e;

    // If first name does have digit or special char
    for (let i = 0; i < f.length; ++i) {
        let ch = f.charCodeAt(i);
        if (
            !(ch >= 65 && ch <= 90) && // A-Z
            !(ch >= 97 && ch <= 122) // a-z
        ) {
            text = "Displayed Contact: ERROR, INFORMATION INVALID";
        }
    }

    // If last name does have digit or special char
    for (let i = 0; i < l.length; ++i) {
        let ch = l.charCodeAt(i);
        if (
            !(ch >= 65 && ch <= 90) && // A-Z
            !(ch >= 97 && ch <= 122) // a-z
        ) {
            text = "Displayed Contact: ERROR, INFORMATION INVALID";
        }
    }

    // If age is Not a Number or less than one or greater than 120
    if (isNaN(a) || a < 1 || a > 120) {
        text = "Displayed Contact: ERROR, INFORMATION INVALID";
    }

    // If email include @utdallas.edu
    if (!e.endsWith("@utdallas.edu")) {
        text = "Displayed Contact: ERROR, INFORMATION INVALID";
    }


    document.getElementById("contactInfo").innerHTML = text;
}