const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi input
    if (username.length < 8 || !/[a-zA-Z]/.test(username) || !/[0-9]/.test(username)) {
        errorMessage.textContent = 'Username minimal 8 karakter, kombinasi huruf dan angka.';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Password minimal 8 karakter.';
        return;
    }

    // Sanitasi input
    const sanitizedUsername = username.replace(/<script>/gi, '');
    const sanitizedPassword = password.replace(/<script>/gi, '');

    // Simulasi pengiriman data ke backend
    fetch('login.php', {
        method: 'POST',
        body: JSON.stringify({
            username: sanitizedUsername,
            password: sanitizedPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect ke halaman dashboard
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'Terjadi kesalahan. Silahkan coba lagi.';
    });
}); 

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