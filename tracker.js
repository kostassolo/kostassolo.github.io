(function() {
    // Function to create and set a data URL iframe
    function setDataIframe() {
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Iframe Content</title>
            </head>
            <body>
                <h2>This is the iframe content loaded from a data URL</h2>
                <p>Hello, world!</p>
            </body>
            </html>
        `;
        const dataUrl = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
        document.getElementById('dataIframe').src = dataUrl;
    }

    // Function to create and set a blob URL iframe
    function setBlobIframe() {
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Iframe Content</title>
            </head>
            <body>
                <h2>This is the iframe content loaded from a blob URL</h2>
                <p>Hello, world!</p>
            </body>
            </html>
        `;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        document.getElementById('blobIframe').src = blobUrl;
    }

    // Set the iframes
    setDataIframe();
    setBlobIframe();
})();
