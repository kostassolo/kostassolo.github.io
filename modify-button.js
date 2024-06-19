// External script: modify-button.js

// Function to replace the event listener
function replaceEventListener(element, type, newListener) {
    const oldListener = element['on' + type];
    element.removeEventListener(type, oldListener);
    element.addEventListener(type, newListener);
}

// Select the button and replace its click event listener
const button = document.getElementById('myButton');
replaceEventListener(button, 'click', function() {
    alert('Button has been modified and clicked!');
});
