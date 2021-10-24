import React from 'react';
import { ReactComponent as SearchInputSvg } from '../icons/searchIcon.svg';

function SearchInput(props) {
    return (
        <div className="searchInputGroup">
            <button className="searchBtn">
                <SearchInputSvg />
            </button>
            <input type="text" class="searchInput" placeholder="Search for a country..."/>
        </div>
    );
}
export default SearchInput;