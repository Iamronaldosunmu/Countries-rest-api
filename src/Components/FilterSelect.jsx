import React from 'react'

function FilterSelect (props) {
    return (
        <select className="filter" onChange={props.onFilterChange}>
            <option value="" disabled selected hidden>Filter by Region</option>
            <option value="" >All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

//  Style he filter select part properly

export default FilterSelect;