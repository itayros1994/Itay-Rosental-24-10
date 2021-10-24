import logo from './logo.svg';
import './App.css';
import './assets/style/main.scss'
import { WeatherApp } from './pages/WeatherApp';
import {Header} from './cmps/Header';
import { Footer } from './cmps/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
    <WeatherApp/>
    <Footer/>
    </div>
  );
}

export default App;
