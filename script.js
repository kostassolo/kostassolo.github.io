function loadContentIntoIframe() {
    const filename = 'page.html'; // Specify the filename used for saving in local storage

    // Retrieve HTML content from local storage
    const htmlContent = localStorage.getItem(filename);
    if (!htmlContent) {
        console.error(`No HTML content found for ${filename}`);
        return;
    }

    // Create an iframe element
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '500px'; // Adjust the height as needed

    // Set the HTML content retrieved from local storage as the source document of the iframe
    iframe.srcdoc = htmlContent;

    // Append the iframe to the container element in the document
    const iframeContainer = document.getElementById('iframeContainer');
    if (!iframeContainer) {
        console.error('Iframe container not found');
        return;
    }
    iframeContainer.innerHTML = ''; // Clear previous content
    iframeContainer.appendChild(iframe);
}

function saveHTMLLocally(url, filename) {
    fetch(url)
        .then(response => response.text())
        .then(htmlContent => {
            localStorage.setItem(filename, htmlContent);
            console.log(`HTML page saved locally as ${filename}`);
            loadContentIntoIframe(); // Call loadContentIntoIframe after saving HTML
        })
        .catch(error => {
            console.error('Error fetching or saving HTML page:', error);
        });
}

// Example usage:
const url = 'https://kostassolo.github.io/page.html';
const filename = 'page.html';
saveHTMLLocally(url, filename);
