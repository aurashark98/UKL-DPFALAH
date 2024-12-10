document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    alert(`Terima kasih atas donasi sebesar Rp${amount}`);
});