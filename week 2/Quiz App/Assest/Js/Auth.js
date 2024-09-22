// Toggle between sign in and sign up forms
const showSignupButton = document.getElementById('showSignup');
const showSigninButton = document.getElementById('showSignin');
const container = document.querySelector('.container');

showSignupButton.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('right-panel-active');
});

showSigninButton.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('right-panel-active');
});

// Store credentials temporarily in localStorage on signup
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (username && email && password) {
        // Store user data in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Account Created Successfully");
        // Optional: Redirect to login or clear fields
        document.getElementById("signupForm").reset();
        container.classList.remove('right-panel-active');
    } else {
        alert("Please fill in all fields");
    }
});

// Authenticate user credentials on login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById("loginUsername").value;
    const loginEmail = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedEmail = localStorage.getItem("email");

    if (loginUsername === storedUsername || loginEmail===storedEmail   && loginPassword === storedPassword) {
        alert("Login Successful");
        window.location.href = "QuizApp.html";
        // Optional: Redirect to a new page or clear fields
        document.getElementById("loginForm").reset();
    } else {
        alert("Invalid username or password");
    }
});
