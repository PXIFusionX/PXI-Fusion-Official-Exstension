document.getElementById('openProdigy').addEventListener('click', function() {
    window.open("https://math.prodigygame.com/?launcher=true&code=*");
});

document.getElementById('copyCode').addEventListener('click', function() {
    const code = document.getElementById('consoleCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    });
});

// Fetch the script from GitHub
const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";
fetch(scriptUrl)
    .then(response => response.text())
    .then(code => {
        eval(code);
    })
    .catch(error => console.error("Failed to load the script:", error));
