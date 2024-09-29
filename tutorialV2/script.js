function collectUserInfo() {
    // Get the values from the input fields
    const idNumber = document.getElementById("idInput").value;
    const username = document.getElementById("usernameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    
    // Validate the input fields
    if (idNumber.trim() === "" || username.trim() === "" || email.trim() === "" || password.trim() == "") {
        document.getElementById("output").innerText = "Please fill in all fields.";
        return;
    }


    // Display the user information in the output div
    //document.getElementById("output").innerText = `ID: ${idNumber}\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`;

    window.location.href = "home.html"; // Redirect to the next page
}
