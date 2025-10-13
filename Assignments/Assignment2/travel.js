/***** Validate Contact Us Form *****/
function validateSelectedRadioValue(radioGroupName) {
    // Use querySelector to find the checked radio button within the specified group
    const selectedRadio = document.querySelector(`input[name="${radioGroupName}"]:checked`);

    // Check if a radio button was actually selected
    if (selectedRadio) {
        console.log("Selected radio: " + selectedRadio.value);
        return true; // Return the value of the selected radio button
    } else {
        console.log("Displayed Contact: ERROR, RADIO IS NOT SELECTED");
        return null; // No radio button was selected
    }
}

function validateAlpha(name) {
    for (let i = 0; i < name.length; ++i) {
        let ch = name.charCodeAt(i);
        if (!(ch >= 65 && ch <= 90) && !(ch >= 97 && ch <= 122)) { // A-Z, a-z
            return false;
        }
    }
    return true;
}

function validateFirstCap(name) {
    let ch = name.charCodeAt(0);
    if (ch >= 65 && ch <= 90) { // A-Z
        return true;
    } else {
        return false;
    }
}

function validateInfoContact() {
    var f, l, p, e, c;
    // Get the value of the input field
    f = document.getElementById("firstname").value;
    l = document.getElementById("lastname").value;
    p = document.getElementById("phone").value;
    e = document.getElementById("email").value;
    c = document.getElementById("comment").value;

    var valid = true;

    // Check first name and last name should be alphabetic characters only
    if (validateAlpha(f) && validateAlpha(l)) {
        // Check first letter of first name and last name should be capitalized
        if (validateFirstCap(f) && validateFirstCap(l)) {
            // Check first name and last name can not be the same
            if (f === l) {
                alert("ERROR, FIRST NAME AND LAST NAME CAN NOT BE THE SAME");
                console.log("ERROR, FIRST NAME AND LAST NAME CAN NOT BE THE SAME");
                valid = false;
            }
        } else {
            alert("ERROR, FIRST LETTER OF NAME NOT CAPITALIZED");
            console.log("ERROR, FIRST LETTER OF NAME NOT CAPITALIZED");
            valid = false;
        }
    } else {
        alert("ERROR, NAME IS NOT ALPHABETIC");
        console.log("ERROR, NAME IS NOT ALPHABETIC");
        valid = false;
    }

    // Check valid phone number
    const phoneRegex = /^\( \d{3}\) \d{3}- \d{4}$/;
    if (!phoneRegex.test(p)) {
        alert("ERROR, PHONE NUMBER IS NOT VALID");
        console.log("ERROR, PHONE NUMBER IS NOT VALID");
        valid = false;
    }

    // Check if email address contains @ and .
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e)) {
        alert("ERROR, EMAIL IS NOT VALID");
        console.log("ERROR, EMAIL IS NOT VALID");
        valid = false;
    }

    // Check if gender is selected
    if (!validateSelectedRadioValue("gender")) {
        alert("ERROR, GENDER IS NOT SELECTED");
        console.log("ERROR, GENDER IS NOT SELECTED");
        valid = false;
    }

    // Check if comment is at least 10 characters long
    if (c.length < 10) {
        alert("ERROR, COMMENT MUST BE AT LEAST 10 CHARACTERS LONG");
        console.log("ERROR, COMMENT MUST BE AT LEAST 10 CHARACTERS LONG");
        valid = false;
    }

    if (valid == true) {
        document.getElementById("contactInfo").innerHTML = 
            "Submitted Successfully! Here is the information you provided:<br><br>" +
            "First Name: " + f + "<br>" +
            "Last Name: " + l + "<br>" +
            "Phone: " + p + "<br>" +
            "Email: " + e + "<br>" +
            "Comment: " + c + "<br>";
        console.log("Displayed Contact: \n" +
            "First Name: " + f + "\n" +
            "Last Name: " + l + "\n" +
            "Phone: " + p + "\n" +
            "Email: " + e + "\n" +
            "Comment: " + c);
    }
    
}

/***** Validate Cars Form *****/
function validateInfoCars() {
    var city, carType, checkIn, checkOut;       
    // Get the value of the input field
    city = document.getElementById("city").value;
    carType = document.getElementById("carType").value;
    checkIn = document.getElementById("checkIn").value;         
    checkOut = document.getElementById("checkOut").value;

    var valid = true;
    // Check city should be alphabetic characters only
    if (!validateAlpha(city)) {
        alert("ERROR, CITY IS NOT ALPHABETIC");
        console.log("ERROR, CITY IS NOT ALPHABETIC");
        valid = false;
    }
}

/***** Style Page *****/
function myFocus(x) {
    x.style.background = "#eeececff";
}

function myBlur(x) {
    x.style.background = "#ffffff";
}