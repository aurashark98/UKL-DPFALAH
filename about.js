const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi validasi (ganti dengan logic autentikasi Anda)
    if (username === 'admin' && password === 'password123') {
        // Redirect ke halaman dashboard atau halaman utama
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Username atau password salah.';
    }
});