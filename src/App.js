import React, {useState} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AppBody from './AppBody';
import CountryDetailsPage from './Components/CountryDetailsPage';

import NavBar from './Components/NavBar';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains(theme));
  const [allCountries, setallCountries] = useState([]);

  const changeTheme = () => {
    document.body.classList.toggle(theme);
    setIsDarkTheme(document.body.classList.contains(theme));
  }
  const getCountryData = (data) => {
    setallCountries(data);
  }
  return (
      <React.Fragment>
        <NavBar changeTheme={changeTheme} isDarkTheme={isDarkTheme}/>
        <Switch>
          <Route path='/:name' render={props => <CountryDetailsPage {...props} />} />
          <Route path='/' exact render={props => <AppBody getCountryData={getCountryData} {...props} />} />
        </Switch>
      </React.Fragment>
  );
}

export default App;
