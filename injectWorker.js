function injectWorkerAndNotify() {
    const blob = new Blob([`
        onmessage = function(e) {
            if (e.data === 'start') {
                self.postMessage('Web Worker started');
                setTimeout(() => {
                    self.postMessage('Notification from Web Worker');
                }, 1000);
            }
        };
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
