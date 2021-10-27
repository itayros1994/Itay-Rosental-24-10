export const locationService = {
    getCurrentPosition
}

function getCurrentPosition(success, error) {
    navigator.geolocation.getCurrentPosition(success, error);
}

