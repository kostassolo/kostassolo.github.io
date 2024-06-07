document.addEventListener('DOMContentLoaded', () => {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.createElement('iframe');

  // Set the srcdoc content
  iframe.srcdoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Injected Iframe</title>
    </head>
    <body>
      <h2>Content inside iframe</h2>
      <p>This iframe was injected by a script.</p>
    </body>
    <script>alert(document.cookie)</script>
    </html>
  `;

  // Append the iframe to the container
  iframeContainer.appendChild(iframe);
});
