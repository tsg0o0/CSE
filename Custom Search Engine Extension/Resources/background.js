browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type == "content") {
        browser.runtime.sendNativeMessage("com.tsg0o0.cse.Extension", function(response) {
            const obj = JSON.parse(response);
            if (obj.type == "native") {
                sendResponse(obj);
            }
        });
    }
    return true;
});
