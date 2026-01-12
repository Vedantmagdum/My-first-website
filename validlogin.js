
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');

        usernameError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;

        if (username === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        } else if (username.length < 3) {
            usernameError.textContent = 'Username must be at least 3 letters.';
            isValid = false;
        } else if (username.length > 15) {
            usernameError.textContent = 'Username cannot be greater than 15 letters.';
            isValid = false;
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            usernameError.textContent = 'Username must be alphanumeric only.';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            isValid = false;
        } else if (password.length > 20) {
            passwordError.textContent = 'Password cannot be greater than 20 characters.';
            isValid = false;
        } else if (!/[A-Z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one uppercase letter.';
            isValid = false;
        } else if (!/[a-z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one lowercase letter.';
            isValid = false;
        } else if (!/[0-9]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one digit.';
            isValid = false;
        } else if (/\s/.test(password)) {
            passwordError.textContent = 'Password cannot contain spaces.';
            isValid = false;
        }

        if (isValid) {
            alert('Login successful! (This is a demo - no backend connected.)');
        }
    });

});
