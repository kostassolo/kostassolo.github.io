document.addEventListener('DOMContentLoaded', () => {
    fetch('/var/log/wifi.log')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('logContent').innerText = data;
        })
        .catch(error => {
            document.getElementById('logContent').innerText = `Fetch error: ${error}`;
        });
});
