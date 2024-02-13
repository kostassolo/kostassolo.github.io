// function fetchAndDisplayPage(url) {
//       fetch(url)
//         .then(response => response.text())
//         .then(html => {
//           const blob = new Blob([html], { type: 'text/html' });
//           const blobURL = URL.createObjectURL(blob);
          
//           const iframe = document.createElement('iframe');
//           iframe.src = blobURL;
//           iframe.style.width = '50%';
//           iframe.style.height = '50%';
          
//           // Check if the container element exists, if not, create it
//           let container = document.getElementById('iframeContainer');
//           if (!container) {
//             container = document.createElement('div');
//             container.id = 'iframeContainer';
//             document.body.appendChild(container);
//           }
          
//           // Append the iframe to the container element
//           container.appendChild(iframe);
//           const parentWindow = iframe.contentWindow.parent;
//           console.log('Parent window:', parentWindow);
//           iframe.contentWindow.parent.document.body.style.backgroundColor='red'
//           // alert(parentWindow)
//         })
//         .catch(error => {
//           console.error('Error fetching the page:', error);
//         });
//     }
// fetchAndDisplayPage('https://kostassolo.github.io/page.html');

const ftpURL = "ftp://localhost:9999/external.html";
window.open(ftpURL, '_blank');
const iframe = document.createElement('iframe');
iframe.src = 'file://Downloads/external.html';
iframe.style.width = '50%';
iframe.style.height = '50%';

let container = document.getElementById('iframeContainer');
if (!container) {
  container = document.createElement('div');
  container.id = 'iframeContainer';
  document.body.appendChild(container);
}
container.appendChild(iframe);
const parentWindow = iframe.contentWindow.parent;
console.log('Parent window:', parentWindow);
iframe.contentWindow.parent.document.body.style.backgroundColor='red'