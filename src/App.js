import React, {useState, useEffect} from 'react';
import './App.css';
import AppBody from './AppBody';

import NavBar from './Components/NavBar';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains(theme))

  const changeTheme = () => {
    document.body.classList.toggle(theme);
    setIsDarkTheme(document.body.classList.contains(theme));
  }
  return (
      <React.Fragment>
        <NavBar changeTheme={changeTheme} isDarkTheme={isDarkTheme}/>
        <AppBody />
      </React.Fragment>

  );
}

export default App;
