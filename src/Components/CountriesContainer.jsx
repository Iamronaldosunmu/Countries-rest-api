import React, {useState, useEffect} from 'react';
import Country from './Country';

function CountriesContainer({countryData, inputValue}) {
    
    const firstTwelveCountries = countryData.slice(0, 12);
    return (
        <section class="countriesContainer">
            <div className="container grid grid-1x2 grid-1x3 grid-1x4">
                {
                    firstTwelveCountries.map(country => <Country flagUrl={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} key={firstTwelveCountries.indexOf(country)}/> )
                }
                
            </div>
        </section>
    );
}

export default CountriesContainer;