window.onload = pageLoad;

function pageLoad() {
    const registerForm = document.getElementById("myRegister");
    registerForm.onsubmit = validateForm;
}

function validateForm() {
    const password = document.forms["myRegister"]["password"][0];
    const retypePassword = document.forms["myRegister"]["password"][1];
    const username = document.forms["myRegister"]["username"];
    const firstname = document.forms["myRegister"]["firstname"];
    const lastname = document.forms["myRegister"]["lastname"];
    const gender = document.forms["myRegister"]["gender"];
    const bday = document.forms["myRegister"]["bday"];
    const email = document.forms["myRegister"]["email"];
    
    // Check if all required fields are filled
    if (firstname.value === "" || lastname.value === "" || username.value === "" || 
        password.value === "" || retypePassword.value === "" || !gender.value || bday.value === "" || email.value === "") {
        document.getElementById('errormsg').innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        return false;
    }

    // Check if passwords match
    if (password.value !== retypePassword.value) {
        document.getElementById('errormsg').innerHTML = "Password ไม่ตรงกัน";
        return false;
    }

    // Save all form data to localStorage
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("bday", bday.value);
    localStorage.setItem("email", email.value);

    // Create a string with all the user's input
    let registrationSummary = "ข้อมูลที่ลงทะเบียน:\n\n";
    registrationSummary += "First Name: " + firstname.value + "\n";
    registrationSummary += "Last Name: " + lastname.value + "\n";
    registrationSummary += "Gender: " + (gender.value || 'ไม่ได้ระบุ') + "\n";
    registrationSummary += "Birthday: " + bday.value + "\n";
    registrationSummary += "Email: " + email.value + "\n";
    registrationSummary += "Username: " + username.value + "\n";

    // Display the summary in an alert
    alert(registrationSummary);
    
    alert("Register เรียบร้อยแล้ว! กด OK เพื่อไปหน้า Login");
    return true; 
}