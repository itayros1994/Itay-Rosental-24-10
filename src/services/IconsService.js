export const iconsServise = {
    getWeatherIcon,
}

function getWeatherIcon(iconNumber) {
    if(iconNumber < 10) {
        return `https://developer.accuweather.com/sites/default/files/0${iconNumber}-s.png`;
      } else {
        return `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;
      }
}

