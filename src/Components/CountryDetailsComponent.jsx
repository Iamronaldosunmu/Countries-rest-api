import React from 'react';

function CountryDetailsComponent({flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders, history}) {
    console.log(borders);
    function getLanguages(languagesObject) {
        const stringarray = [];
        languagesObject.forEach(language => stringarray.push(language.name));
        return stringarray.length > 1 ? stringarray.join(', ') : stringarray;
    }
    return (
        <div className="countryDetailsComponent">
            <div className="flagImageContainer">
                <img src={flag} alt=""/>
            </div>
            <div className="extraCountryInfo">
                <h2>{name}</h2>
                <div className="countryInfoTextContainer">
                    <div className="countryInfoTextContainer1">
                        <p class="details">Native Name: <span className="detailValue">{nativeName || 'none'}</span></p>
                        <p class="details">Population: <span className="detailValue">{population || 'none'}</span></p>
                        <p class="details">Region: <span className="detailValue">{region || 'none'}</span></p>
                        <p class="details">Sub Region: <span className="detailValue">{subregion || 'none'}</span></p>
                        <p class="details">Capital: <span className="detailValue">{capital || 'none'}</span></p>
                    </div>
                    <div className="countryInfoTextContainer2">
                        <p class="details">Top Level Domain <span className="detailValue">{topLevelDomain[0]}</span></p>
                        <p class="details">Currencies: <span className="detailValue">{currencies && currencies[0].name}</span></p>
                        <p class="details">Languages: <span className="detailValue">{languages && getLanguages(languages)}</span></p>
                    </div>
                        </div>
                    <div class="borderCountriesContainer">
                        <h4>Border Countries:</h4>
                        <div className="borderItems">
                            {borders && borders.map(border => <div onClick={() => history.push(`/${border}`)} >{border}</div>)}
                            {/* <div>France</div>
                            <div>Germany</div>
                            <div>Netherlands</div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CountryDetailsComponent;