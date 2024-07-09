function injectIframeWithBlob() {
    console.log("Script loaded and injectIframeWithBlob called");

    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.style.border = '1px solid #ccc';
    iframe.style.marginTop = '1em';

    // Create the HTML content for the iframe
    const iframeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>First Party Iframe</title>
        </head>
        <body>
            <h1>Hello from Blob Iframe!</h1>
            <p>This is content served from a blob URL.</p>
        </body>
        </html>
    `;

    // Create a blob URL
    const blob = new Blob([iframeContent], { type: 'text/html' });
    const blobURL = URL.createObjectURL(blob);

    // Set the iframe's src to the blob URL
    iframe.src = blobURL;

    // Append the iframe to the body
    document.body.appendChild(iframe);

    console.log("Iframe injected with src:", blobURL);
}
