import React from 'react';
import Country from './Country';

function CountriesContainer({countryData, history}) {
    console.log(countryData)
    const firstSixteenCountries = countryData.slice(0, 16);
    return (
        <section className="countriesContainer">
            <div className="container grid grid-1x2 grid-1x3 grid-1x4">
                {
                    firstSixteenCountries.map(country => <Country flagUrl={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} key={firstSixteenCountries.indexOf(country)} history={history}/> )
                }              
            {countryData.length == 0 ? <h1 className="noresults">No results</h1> : ''}
            </div>
        </section>
    );
}

export default CountriesContainer;

// Create a custom function that parses a number to have commas inbetween