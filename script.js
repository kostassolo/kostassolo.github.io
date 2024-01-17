// external-script.js
document.addEventListener('DOMContentLoaded', function () {
  // Your code to register an iframe in the app
  const iframe = document.createElement('iframe');
  iframe.src = '/Users/kostassolomos/Desktop/electron/csp_testing_scriptsrc/external.html';
  document.body.appendChild(iframe);
});

