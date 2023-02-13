function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let pan = document.getElementById("pan").value;
    let phone = document.getElementById("phone").value;
    let aadhar = document.getElementById("aadhar").value;
    let email = document.getElementById("email").value;
    let hobbies = document.getElementsByName("hobbies");
    let gender = document.getElementsByName("gender");
    let subject = document.getElementById("subject").value;
    let hobbieCheck = true;
    let genderCheck = true;
    let passCheck = false;
    hobbies.forEach((check_box) => {
        if(check_box.checked) {
            hobbieCheck = false;
        }
    })
    gender.forEach((radio_button) => {
        if(radio_button.checked) {
            genderCheck = false;
        }
    })
    if(
        username == '' ||
        password == '' ||
        pan == '' ||
        phone == '' ||
        aadhar == '' ||
        email == '' ||
        hobbieCheck ||
        genderCheck ||
        subject == ''
    ) {
        document.getElementById("error").innerHTML = 'Invalid, all fields are required!';
        document.getElementById("error").classList.remove("valid");
    }
    else {
        document.getElementById("error").innerHTML = 'Valid!';
        document.getElementById("error").classList.add("valid");
    }
    window.scrollTo(0, 0);
}
function matchpass() {  
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if(repassword==password) {  
        return true;  
    }  
    else {  
        alert("Error, passwords must be same!");  
        return false;  
    }  
}
