document.getElementById('open-prodigy').addEventListener('click', function() {
    window.open('https://math.prodigygame.com/?launcher=true&code=*', '_blank');
});

document.getElementById('copy-code').addEventListener('click', function() {
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
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
});
