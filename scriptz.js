// srcdoc iframe
const srcdocIframe = document.createElement('iframe');
srcdocIframe.srcdoc = `
    <html>
        <body>
            <h2>This is srcdoc iframe</h2>
            <script>
                console.log('srcdoc iframe origin:', window.origin);
                console.log('srcdoc iframe cookies:', window.parent.document.cookie);
            </script>
        </body>
    </html>
`;
document.body.appendChild(srcdocIframe);

// data: iframe
const dataContent = `
    <html>
        <body>
            <h2>This is data iframe</h2>
            <script>
                console.log('data iframe origin:', window.origin);
                console.log('data iframe cookies:', window.parent.document.cookie);
            </script>
        </body>
    </html>
`;
const dataIframe = document.createElement('iframe');
dataIframe.src = 'data:text/html;base64,' + btoa(dataContent);
document.body.appendChild(dataIframe);

// blob iframe
const blobContent = `
    <html>
        <body>
            <h2>This is blob iframe</h2>
            <script>
                console.log('blob iframe origin:', window.origin);
                console.log('blob iframe cookies:', window.parent.document.cookie);
            </script>
        </body>
    </html>
`;
const blob = new Blob([blobContent], { type: 'text/html' });
const blobURL = URL.createObjectURL(blob);

const blobIframe = document.createElement('iframe');
blobIframe.src = blobURL;
document.body.appendChild(blobIframe);
