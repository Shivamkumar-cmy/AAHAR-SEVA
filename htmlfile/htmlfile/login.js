  function showSignupForm() {
    document.getElementById('login-form').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
        setTimeout(() => {
            document.getElementById('signup-form').classList.remove('hidden');
        }, 10);
    }, 500);
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('forgot-password-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        setTimeout(() => {
            document.getElementById('login-form').classList.remove('hidden');
        }, 10);
    }, 500);
}

function showForgotPasswordForm() {
    document.getElementById('login-form').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('forgot-password-form').style.display = 'block';
        setTimeout(() => {
            document.getElementById('forgot-password-form').classList.remove('hidden');
        }, 10);
    }, 500);
}

function handleCredentialResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    // Handle credential response and perform OTP authentication
}