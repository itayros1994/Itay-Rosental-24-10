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

// function getWeatherMainImg(iconNumber) {

//   if(iconNumber < 5) {
// return 'https://images.all-free-download.com/images/graphiclarge/natural_landscape_drawing_mountain_lake_trees_decoration_6833988.jpg'
//   }

//   if(iconNumber > 5 && iconNumber < 10) {
//     return 'https://images.all-free-download.com/images/graphiclarge/wild_life_drawing_landscape_animal_silhouette_design_6834956.jpg'
//   }

// }
