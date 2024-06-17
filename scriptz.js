// Inject data URL iframe
(function() {
    const dataIframe = document.createElement('iframe');
    const dataContent = `
        <html>
        <body>
            <script>
                window.addEventListener('message', function(event) {
                    if (event.data === 'REGISTER_SW') {
                        window.parent.postMessage('REGISTER_SW', '*');
                    }
                });
                window.parent.postMessage('REGISTER_SW', '*');
            </script>
        </body>
        </html>
    `;
    dataIframe.src = 'data:text/html;base64,' + btoa(dataContent);
    document.body.appendChild(dataIframe);
})();

// Inject blob URL iframe
(function() {
    const blobContent = `
        <html>
        <body>
            <script>
                window.addEventListener('message', function(event) {
                    if (event.data === 'REGISTER_SW') {
                        window.parent.postMessage('REGISTER_SW', '*');
                    }
                });
                window.parent.postMessage('REGISTER_SW', '*');
            </script>
        </body>
        </html>
    `;
    const blob = new Blob([blobContent], { type: 'text/html' });
    const blobUrl = URL.createObjectURL(blob);
    const blobIframe = document.createElement('iframe');
    blobIframe.src = blobUrl;
    document.body.appendChild(blobIframe);
})();
