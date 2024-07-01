// Define the worker script
const workerBlob = new Blob([`
    onmessage = function(event) {
        if (event.data === 'start') {
            postMessage('Hello from Blob worker');
        }
    };
`], { type: 'application/javascript' });

// Create a URL for the Blob
const workerBlobURL = URL.createObjectURL(workerBlob);

// Register the Blob web worker
const worker = new Worker(workerBlobURL);

worker.onmessage = function(event) {
    console.log('Data from worker:', event.data);
};

// Post a message to the worker
worker.postMessage('start');

// Optionally, expose the worker or its functions to the global scope or parent window
window.worker = worker;
