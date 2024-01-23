// external-script.js
// document.addEventListener('DOMContentLoaded', function () {
//   // Your code to register an iframe in the app
//   const iframe = document.createElement('iframe');
//   iframe.src = '/Users/kostassolomos/Desktop/electron/csp_testing_scriptsrc/external.html';
//   // iframe.src = 'https://www.example.com';

//   document.body.appendChild(iframe);
// });

// third-party.js
// Note: This script does not have direct access to Node.js in the renderer process

// Create a Web Worker (simplified example)


// const worker = new Worker('./worker.js');

// Send a message to the main thread via IPC
window.postMessage({ source: 'third-party', data: 'Hello from third-party!' }, '*');

// Listen for messages from the Web Worker (if any)
// worker.onmessage = (event) => {
//   const messageFromWorker = event.data;
//   console.log('Message from Web Worker:', messageFromWorker);
// };
