// content.js

// Example: Add a custom button to the Prodigy Math Game page
function addCustomButton() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'PXI Fusion';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#00bfff';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = 1000;

    // Add click event to the button
    button.addEventListener('click', () => {
        alert('PXI Fusion Button Clicked!');
    });

    // Append the button to the body
    document.body.appendChild(button);
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addCustomButton);
