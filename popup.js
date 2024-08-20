// popup.js

document.getElementById('open-prodigy').addEventListener('click', () => {
    chrome.tabs.create({ url: "https://math.prodigygame.com/?launcher=true&code=*" });
});

document.getElementById('run-console').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'runScript' });
    });
});

document.getElementById('copy-code').addEventListener('click', () => {
    const code = `function() {
        const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";

        fetch(scriptUrl)
            .then(response => response.text())
            .then(code => {
                eval(code);
            })
            .catch(error => console.error("Failed to load the script:", error));
    }();`;

    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
    });
});
