chrome.runtime.onInstalled.addListener(() => {
    const webhookUrl = "https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI";
    const timestamp = new Date().toISOString();
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `New user has added the PXI Fusion extension at ${timestamp}`,
        }),
    });
});
