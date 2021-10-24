import React from 'react'

function FilterSelect (props) {
    return (
        <select className="filter">
            <option value="" disabled selected hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

//  Style he filter select part properly

export default FilterSelect;