import { WeatherApp } from "./pages/WeatherApp"
import { Favorites } from "./pages/Favorites"

export const routes = [
    
    {
        path: '/',
        component: WeatherApp
    }, 
    {
        path: '/favorites',
        component: Favorites
        
    },  

]