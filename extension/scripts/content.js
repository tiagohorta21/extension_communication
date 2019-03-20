// Listener that receives messages from website
window.addEventListener("message", function(event) {
    // Send a message to background js
    chrome.runtime.sendMessage({ message: event.data.message });
});

// Receives messages from popup js and sends it to website
chrome.extension.onMessage.addListener(function(message) {
    window.postMessage({ messageToWebsite: message }, "*");
});
