// Listener that receives messages from website
window.addEventListener("message", function(event) {
    // Send a message to background js
    chrome.runtime.sendMessage({ message: event.data.message });
});
