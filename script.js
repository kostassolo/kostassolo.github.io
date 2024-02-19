
// const ftpURL = "ftp://localhost:9999/external.html";
// window.open(ftpURL, '_blank');
var result = window.confirm("Do you want to proceed?");
if (result === true) {
    // User clicked "OK", proceed with the action
    console.log("User confirmed.");
} else {
    // User clicked "Cancel" or closed the dialog box
    console.log("User cancelled.");
}




// const iframe = document.createElement('iframe');
// // iframe.src = 'file://Downloads/external.html';
// iframe.src = 'https://example.com';

// iframe.style.width = '50%';
// iframe.style.height = '50%';

// let container = document.getElementById('iframeContainer');
// if (!container) {
//   container = document.createElement('div');
//   container.id = 'iframeContainer';
//   document.body.appendChild(container);
// }
// container.appendChild(iframe);
// const parentWindow = iframe.contentWindow.parent;
// console.log('Parent window:', parentWindow);
// iframe.contentWindow.parent.document.body.style.backgroundColor='red'