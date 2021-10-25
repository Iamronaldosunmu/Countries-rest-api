import React from 'react'
import SearchInput from './SearchInput';
import FilterSelect from './FilterSelect';

function ControlSection(props) {
    return (
        <section class="controlSectionContainer">
            <div className="controlSection container">
                <SearchInput inputValue={props.inputValue} onInputChange={props.onInputChange} onSubmit={props.onSubmit}/>
                <FilterSelect onFilterChange={props.onFilterChange}/>
            </div>
            
        </section>
    );
}
export default ControlSection;