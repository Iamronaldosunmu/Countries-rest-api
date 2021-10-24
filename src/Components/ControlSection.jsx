import React from 'react'
import SearchInput from './SearchInput';
import FilterSelect from './FilterSelect';

function ControlSection(props) {
    return (
        <div class="controlSectionContainer">
            <div className="controlSection container">
                <SearchInput />
                <FilterSelect />
            </div>
        </div>
    );
}
export default ControlSection;