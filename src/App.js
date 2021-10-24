import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './assets/style/main.scss'
import { WeatherApp } from './pages/WeatherApp';
import {Header} from './cmps/Header';
import { Footer } from './cmps/Footer';
import { routes } from './routes.js';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
    <Switch>
      {routes.map(route => {
        return <Route key={route.path} exact component={route.component} path={route.path}/>
      })}
      </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
