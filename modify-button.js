// External script: modify-button.js

// Function to modify the inline script
function modifyInlineScript() {
    const inlineScript = document.getElementById('inlineScript');
    if (inlineScript) {
        // Remove the existing inline script
        inlineScript.parentNode.removeChild(inlineScript);

        // Create a new script element with modified content
        const newScript = document.createElement('script');
        newScript.id = 'inlineScript';
        newScript.textContent = `
            document.getElementById('myButton').addEventListener('click', function() {
                alert('Button has been modified and clicked!');
            });
        `;

        // Append the new script element to the body
        document.body.appendChild(newScript);
    }
}

// Run the function to modify the inline script
modifyInlineScript();
