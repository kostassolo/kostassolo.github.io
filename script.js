// document.addEventListener('DOMContentLoaded', () => {
//   const iframeContainer = document.getElementById('iframe-container');
//   const iframe = document.createElement('iframe');

//   // Set the srcdoc content with inline JavaScript to read cookies
//   iframe.srcdoc = `
//     <!DOCTYPE html>
//     <html lang='en'>
//     <head>
//       <meta charset='UTF-8'>
//       <meta name='viewport' content='width=device-width, initial-scale=1.0'>
//       <title>Injected Iframe</title>
//     </head>
//     <body>
//       <h2>Iframe Content</h2>
//       <p>This iframe was injected by a script.</p>
//       <p id='cookie-info'></p>
//       <script>
//         // Function to read cookies
//       alert(document.cookie)
//         function getCookie(name) {
//           const value = \`;\${document.cookie}\`;
//           const parts = value.split(\`;\${name}=\`);
//           if (parts.length === 2) return parts.pop().split(';').shift();
//         }

//         // Display cookie information
//         const username = getCookie('username');
//         const sessionToken = getCookie('sessionToken');
//         document.getElementById('cookie-info').innerText = 
//           'Username: ' + username + ', Session Token: ' + sessionToken;
//       </script>
//     </body>
//     </html>
//   `;

//   // Append the iframe to the container
//   iframeContainer.appendChild(iframe);
// });


document.addEventListener('DOMContentLoaded', () => {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.createElement('iframe');

  // Set the srcdoc content with inline JavaScript to read cookies and include an iframe to google.com
  iframe.srcdoc = `
    <!DOCTYPE html>
    <html lang='en'>
    <body>
    <iframe src="https://www.example.com" style="width: 100%; height: 500px;"></iframe>
    </body>
    </html>
  `;

  // Append the iframe to the container
  iframeContainer.appendChild(iframe);
});
