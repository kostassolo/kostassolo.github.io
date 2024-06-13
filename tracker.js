(function() {
    const serviceWorkerScript = `
        self.addEventListener('install', function(event) {
            console.log('Service Worker installing.');
            self.skipWaiting();
        });
        
        self.addEventListener('activate', function(event) {
            console.log('Service Worker activating.');
        });
        
        self.addEventListener('fetch', function(event) {
            event.respondWith(fetch(event.request));
        });
    `;

    const blob = new Blob([serviceWorkerScript], { type: 'application/javascript' });
    const blobURL = URL.createObjectURL(blob);

    window.registerServiceWorker = function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(blobURL).then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
                document.getElementById('serviceWorkerOutput').textContent = 'Service Worker registered with scope: ' + registration.scope;
            }).catch(function(error) {
                console.log('Service Worker registration failed:', error);
                document.getElementById('serviceWorkerOutput').textContent = 'Service Worker registration failed: ' + error;
            });
        } else {
            console.log('Service Workers are not supported in this browser.');
            document.getElementById('serviceWorkerOutput').textContent = 'Service Workers are not supported in this browser.';
        }
    };
})();
