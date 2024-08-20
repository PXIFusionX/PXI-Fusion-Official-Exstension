// background.js

chrome.runtime.onInstalled.addListener(() => {
    fetch('https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `New user has added PXI Fusion extension at ${new Date().toISOString()}`
        })
    }).catch(error => console.error('Error sending webhook:', error));
});
