function thirdPartyNotification() {
    if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showThirdPartyNotification();
            } else {
                alert('Notification permission denied.');
            }
        });
    } else if (Notification.permission === 'granted') {
        showThirdPartyNotification();
    } else {
        alert('Notification permission denied.');
    }
}

function showThirdPartyNotification() {
    new Notification('Third-Party Notification', {
        body: 'This is a notification from the third-party script.'
    });
}
