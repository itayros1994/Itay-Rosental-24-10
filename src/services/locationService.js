export const locationService = {
    getCurrentPosition
}

function getCurrentPosition(success, err) {
    navigator.geolocation.getCurrentPosition(success, err);
}

