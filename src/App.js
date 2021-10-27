import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './assets/style/main.scss'
import { WeatherApp } from './pages/WeatherApp';
import {Header} from './cmps/Header'
import { Footer } from './cmps/Footer';
import { routes } from './routes.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { CssBaseline } from '@mui/material';

function App() {
  const { darkMode } = useSelector(
    (state) => state.weatherModule
  );

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode) ? {main : '#ff0044', background : {default : '#132F4C' }} : {main : '#ff0044', background : {default : '#cfd8dc' }}

    },
  })

  return (
    <div  className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline>
          <Header/>
          <Switch >
            <div className="main-container"> {routes.map(route => {
              return <Route key={route.path} exact component={route.component} path={route.path} />
            })}</div>
          </Switch>
          <Footer />
          </CssBaseline>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
