function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() { 
    var name = document.contactForm.name.value;
    var password = document.contactForm.password.value;
   
    var nameErr = pwdErr = true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(password == "") {
        printError("pwdErr", "Please enter your password");
    } else {
            printError("pwdErr", "");
            pwdErr = false;
        }
    if((nameErr || pwdErr) == true) {
       return false;
    } else {
        window.alert("Login Success");
    }
};