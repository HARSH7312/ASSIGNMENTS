// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^[0-9]{10}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Invalid Email Address");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be strong (Uppercase, Lowercase, Number, Special Character)");
        return false;
    }
    alert("Form Validated Successfully!");
    return true;
}