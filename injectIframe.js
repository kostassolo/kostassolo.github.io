function injectIframeWithBlob() {
    console.log("Script loaded and injectIframeWithBlob called");

    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.style.width = '80%';
    iframe.style.height = '300px';
    iframe.style.border = '1px solid #ccc';
    iframe.style.marginTop = '1em';

    // Create the HTML content for the iframe
    const iframeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>First Party Iframe</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                }
                .content {
                    padding: 1em;
                }
            </style>
        </head>
        <body>
            <div class="content">
                <h1>Hello from Blob Iframe!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
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
