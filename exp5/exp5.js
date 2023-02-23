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

function validate() {
    let form = document.getElementById("form");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let pan = document.getElementById("pan").value;
    let phone = document.getElementById("phone").value;
    let aadhar = document.getElementById("aadhar").value;
    let email = document.getElementById("email").value;
    let hobbies = document.getElementsByName("hobbies");
    let gender = document.getElementsByName("gender");
    let subject = document.getElementById("subject").value;
    let hobbieCheck = true;
    let genderCheck = true;
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
        repassword == '' ||
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
        let z = matchpass();
        console.log(z);
        if(z) {
            window.open("submit.html");
        }
    }
    window.scrollTo(0, 0);
}
