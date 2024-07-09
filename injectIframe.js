function injectIframeWithBlob() {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.style.border = '1px solid #ccc';
    let iframeContainer = document.getElementById('iframe-container');
    if (!iframeContainer) {
        iframeContainer = document.createElement('div');
        iframeContainer.id = 'iframe-container';
        document.body.appendChild(iframeContainer);
    }

    // Create the HTML content for the iframe
    const iframeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>First Party Iframe</title>
        </head>
        </html>
    `;

    // Create a blob URL
    const blob = new Blob([iframeContent], { type: 'text/html' });
    const blobURL = URL.createObjectURL(blob);

    // Set the iframe's src to the blob URL
    iframe.src = blobURL;

    // Append the iframe to the container
    iframeContainer.appendChild(iframe);
}
