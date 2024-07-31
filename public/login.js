document.addEventListener('DOMContentLoaded', () => {    
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // You can perform validation or other logic here

        // Redirect to dashboard.html
        window.location.href = 'dashboard.html';
    });

    // Handle register form submission
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // You can perform validation or other logic here

        // Redirect to dashboard.html
        window.location.href = 'dashboard.html';
    });
});