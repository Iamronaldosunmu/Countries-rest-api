import React from 'react';
import Country from './Country';

function CountriesContainer({countryData, history}) {
    
    const firstTwelveCountries = countryData.slice(0, 12);
    return (
        <section className="countriesContainer">
            <div className="container grid grid-1x2 grid-1x3 grid-1x4">
                {
                    firstTwelveCountries.map(country => <Country flagUrl={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} key={firstTwelveCountries.indexOf(country)} history={history}/> )
                }              
            </div>
        </section>
    );
}

export default CountriesContainer;

// Create a custom function that parses a number to have commas inbetween