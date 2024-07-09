function injectWorkerAndNotify() {
    const blob = new Blob([`
        onmessage = function(e) {
            if (e.data === 'start') {
                // Request notification permission
                if (Notification.permission === 'default') {
                    Notification.requestPermission().then(permission => {
                        if (permission === 'granted') {
                            sendNotification();
                        } else {
                            postMessage('Notification permission denied');
                        }
                    });
                } else if (Notification.permission === 'granted') {
                    sendNotification();
                } else {
                    postMessage('Notification permission denied');
                }
            }
        };

        function sendNotification() {
            self.registration.showNotification('Notification from Web Worker', {
                body: 'This is a notification from the Web Worker.'
            });
            postMessage('Notification sent from Web Worker');
        }
    `], { type: 'application/javascript' });

    const worker = new Worker(URL.createObjectURL(blob));

    worker.onmessage = function(event) {
        alert(event.data);
    };

    // Create a button to send a message to the worker
    const button = document.createElement('button');
    button.textContent = 'Send Notification';
    button.onclick = function() {
        worker.postMessage('start');
    };
    document.body.appendChild(button);
}
