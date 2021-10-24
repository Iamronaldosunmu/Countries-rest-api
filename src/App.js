import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SearchInput from './Components/SearchInput';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains(theme))
  const changeTheme = () => {
    document.body.classList.toggle(theme);
    setIsDarkTheme(document.body.classList.contains(theme));
    console.log(isDarkTheme);
  }
  return (
      // <React.Fragment>
      //   <NavBar changeTheme={changeTheme} isDarkTheme={isDarkTheme}/>
      // </React.Fragment>
    <SearchInput />
    
  );
}

export default App;
