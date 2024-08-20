document.getElementById('open-prodigy').addEventListener('click', function () {
    window.open('https://math.prodigygame.com/?launcher=true&code=*', '_blank');
});

document.getElementById('copy-console-code').addEventListener('click', function () {
    const consoleCode = document.getElementById('console-code').textContent;
    navigator.clipboard.writeText(consoleCode).then(() => {
        alert('Console code copied!');
    });
});

document.getElementById('copy-bookmark-code').addEventListener('click', function () {
    const bookmarkCode = document.getElementById('bookmark-code').textContent;
    navigator.clipboard.writeText(bookmarkCode).then(() => {
        alert('Bookmark code copied!');
    });
});

document.getElementById('youtube').addEventListener('click', function () {
    window.open('https://www.youtube.com/@PXIFusionX', '_blank');
});

document.getElementById('discord').addEventListener('click', function () {
    window.open('https://discord.gg/VAkGbXKwhY', '_blank');
});
