self.onmessage = function(event) {
    if (event.data === 'requestPermission') {
        requestNotificationPermission();
    } else if (event.data === 'testNotification') {
        testNotification();
    }
};

function requestNotificationPermission() {
    console.log("Requesting notification permission from worker...");
    Notification.requestPermission().then(permission => {
        self.postMessage("Notification permission status: " + permission);
    }).catch(error => {
        self.postMessage("Error requesting notification permission: " + error);
    });
}

function testNotification() {
    console.log("Testing notification from worker...");
    if (Notification.permission === "granted") {
        const notification = new Notification("Third-Party Worker Test Notification", {
            body: "Click here to visit OpenAI",
            icon: "https://kostassolo.github.io/favicon.png"
        });

        notification.onclick = function(event) {
            event.preventDefault(); // Prevent the browser from focusing the Notification's tab
            self.clients.openWindow('https://www.openai.com');
        };

        notification.onshow = function() {
            self.postMessage("Notification shown successfully.");
        };
    } else {
        self.postMessage("Notifications are not enabled or permission denied");
    }
}
