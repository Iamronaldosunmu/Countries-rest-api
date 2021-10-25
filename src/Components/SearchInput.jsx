import React, {useState} from 'react';
import { ReactComponent as SearchInputSvg } from '../icons/searchIcon.svg';

function SearchInput(props) {
    
    
    return (
        <form className="searchInputGroup" onSubmit={props.onSubmit}>
            <button className="searchBtn">
                <SearchInputSvg />
            </button>
            <input type="text" value={props.inputValue} class="searchInput" placeholder="Search for a country..." onChange={props.onInputChange}/>
        </form>
    );
}
export default SearchInput;