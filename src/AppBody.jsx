import React, {useState, useEffect} from 'react';
import ControlSection from './Components/ControlSection';
import CountriesContainer from './Components/CountriesContainer';
import axios from 'axios';


function AppBody(props){
    const [countryData, setCountryData] = useState([]);
    const [selectedRegion, setselectedRegion] = useState('');
    const [inputValue, setinputValue] = useState('');
    useEffect(() => {
        async function getCountryData () {
          const {data} = await axios.get('https://restcountries.com/v2/all');
          setCountryData(data);
          props.getCountryData(data);
        }
        getCountryData();
      });
    const handleAllFilters = (data) => {
        const filteredByRegion = selectedRegion ? filterByRegion(data, selectedRegion) : data;
        const filteredByInputSearch = filterByInputSearch(filteredByRegion, inputValue);
        return filteredByInputSearch;
    };
    const filterByInputSearch = (countries, countryName) => {
        return countries.filter(country => country.name.toLowerCase().startsWith(countryName.toLowerCase()));
    }
    const filterByRegion = (countries, region) => {
        return countries.filter(country => country.region === region);
    }
    const onFilterChange = (e) => {
        setselectedRegion(e.target.value);
    }
    const onInputChange = (e) => {
        setinputValue(e.currentTarget.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <React.Fragment>
        <ControlSection inputValue={inputValue} onInputChange={onInputChange} onSubmit={onSubmit} onFilterChange={onFilterChange}/>
        <CountriesContainer countryData={handleAllFilters(countryData)} history={props.history} />
      </React.Fragment>
    );
}

export default AppBody;