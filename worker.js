// This would be on the third-party domain (example.com)
self.onmessage = function(event) {
    console.log('Third-Party Worker received:', event.data);
    self.postMessage('Hello from ');
};
