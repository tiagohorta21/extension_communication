// Create rule to allow the extension to be active in the localhost
const urlRule = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                hostEquals: "localhost"
            }
        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
};

// Apply the rule when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([urlRule]);
    });
});

// Content script message listener
chrome.runtime.onMessage.addListener(function(message) {
    // Store object in chrome storage
    chrome.storage.sync.set(message);
});

// Clean chrome storage when background script re-runs
chrome.storage.sync.clear();
