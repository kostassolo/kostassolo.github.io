document.addEventListener('DOMContentLoaded', function() {
    // Create the iframe element
    var iframe = document.createElement('iframe');
    iframe.srcdoc = `
        <html>
            <head>
                <script>
                    // Log the iframe's cookies to the console
                    console.log('Iframe cookies: ' + document.cookie);
                    // Log the iframe's origin to the console
                    console.log('Iframe origin: ' + window.origin);
                <\/script>
            </head>
            <body>
                <h2>Iframe Content</h2>
            </body>
        </html>`;
    
    // Append the iframe to the body
    document.body.appendChild(iframe);
});
