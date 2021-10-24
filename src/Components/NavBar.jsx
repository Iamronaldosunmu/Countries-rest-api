import React from 'react';
import { ReactComponent as LightThemeSvg } from '../icons/moon-6687.svg';
import { ReactComponent as DarkThemeSvg } from '../icons/dark-mode-6682.svg';


function NavBar({changeTheme, isDarkTheme}) {
    return (
        <div className="navbar">
            <div className="navbarContainer container">
                <p className="navbarTitle">Where in the world?</p>
                <button className="themeButton" onClick={changeTheme}>
                    {isDarkTheme ? <DarkThemeSvg/> : <LightThemeSvg/>}
                    <span class="themeButtonText">Dark Mode</span>
                    
                </button>
            </div>
        </div>
    );
}

export default NavBar;