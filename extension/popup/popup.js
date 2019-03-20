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

// Function to send a message to website
function sendMessageToWebsite(message) {
    chrome.tabs.query({ url: "http://localhost:3000/*" }, function(tabs) {
        tabs &&
            tabs.forEach(tab => {
                chrome.tabs.get(tab.id, function(tab) {
                    if (tab.active === true) {
                        chrome.tabs.sendMessage(tab.id, message);
                    }
                });
            });
    });
}

// Add button and input listeners for click and change events
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var input = document.getElementById("input");

    button.addEventListener("click", function() {
        sendMessageToWebsite(input);
    });
    input.addEventListener("change", function() {
        input = document.getElementById("input").value;
    });
});
