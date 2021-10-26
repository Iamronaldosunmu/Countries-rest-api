import axios from 'axios';
import React, {useEffect, useState} from 'react';
import namesAndCodes from '../countryNamesandCodes';
import {ReactComponent as BackIcon} from '../icons/backIcon.svg';
import CountryDetailsComponent from './CountryDetailsComponent';

function CountryDetailsPage({history, match}) {
    const name = match.params.name;
    const [countryData, setcountry] = useState([]);
    const [finalCountryNames, setCountryNames] = useState([]);
    useEffect(() =>{
        async function getCountry() {
            const {data} = await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`);
            setcountry(data);
            let countryCodes = data[0].borders;
            let countryNames = [];
            if (countryCodes) {
                countryCodes.forEach(code => {
                    let obj = namesAndCodes.filter(item => item.code === code);
                    countryNames.push(obj[0].name);
                })
            }
            setCountryNames(countryNames);
        }
        getCountry();
    }, [name]);
    return (
        <section className="countryDetailsPage container" >
            <button className="backButton" onClick={() => history.goBack()}>
                <BackIcon/>
                <p class="backButtonText">Back</p>
            </button>
            {
            countryData.map(country => <CountryDetailsComponent flag={country.flag} name={country.name} nativeName={country.nativeName} population={country.population.toLocaleString("en-US")} region={country.region} subregion={country.subregion} capital={country.capital} topLevelDomain={country.topLevelDomain} currencies={country.currencies} languages={country.languages} borders={finalCountryNames} history={history}/>)
            }
            {/* <CountryDetailsComponent name={match.params.name}/> */}
        </section>
    );
}
export default CountryDetailsPage;