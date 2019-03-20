// Get message object from chrome storage
chrome.storage.sync.get(["message"], function(storage) {
    let message = storage.message;
    let popupElement = document.getElementById("message_from_website");

    // Validation when there is no message in chrome storage
    if (message === undefined) {
        popupElement.innerHTML = "";
    } else {
        popupElement.innerHTML = message;
    }
});
