document.addEventListener('DOMContentLoaded', () => {
    const showLoginBtn = document.getElementById('show-login-btn');
    const showRegisterBtn = document.getElementById('show-register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    function showLogin() {
        loginForm.classList.add('active-form');
        registerForm.classList.remove('active-form');

        showLoginBtn.classList.add('active');
        showRegisterBtn.classList.remove('active');
    }

    function showRegister() {
        registerForm.classList.add('active-form');
        loginForm.classList.remove('active-form');

        showRegisterBtn.classList.add('active');
        showLoginBtn.classList.remove('active');
    }

    showLoginBtn.addEventListener('click', showLogin);
    showRegisterBtn.addEventListener('click', showRegister);

    // Revisa la URL para ver si debe mostrar el registro por defecto
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'register') {
        showRegister();
    }
});