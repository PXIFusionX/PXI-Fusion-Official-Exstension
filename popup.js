document.getElementById('openProdigy').addEventListener('click', function() {
    window.open("https://math.prodigygame.com/?launcher=true&code=*");
});

document.getElementById('copyCode').addEventListener('click', function() {
    const code = document.getElementById('consoleCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    });
});
