// content.js

// Function to execute the script from a URL
function executeScript() {
    const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";

    fetch(scriptUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error("Failed to load the script:", error));
}

// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "runScript") {
        executeScript();
    }
});
