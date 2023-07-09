if (window.location.href.startsWith('https://www.reddit.com/')) {
    // Replace 'www.reddit.com' with 'old.reddit.com' in the URL
    var newURL = window.location.href.replace('https://www.reddit.com', 'old.reddit.com');

    // Navigate to the new URL
    window.location.href = newURL;
}

browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});
