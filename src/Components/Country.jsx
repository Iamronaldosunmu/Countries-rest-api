import React from 'react';

function Country ({flagUrl, name, population, region, capital}) {
    return (
        <div className="countryContainer">
            <section className="countryFlag">
                <img src={flagUrl} />
            </section>
            <section className="countryInformation">
                <h2 className="countryName">{name}</h2>
                <p className="countryPopulation"><span className="infoName">Population: </span><span className="infoValue">{population}</span></p>
                <p className="countryPopulation"><span className="infoName">Region: </span><span className="infoValue">{region}</span></p>
                <p className="countryPopulation"><span className="infoName">Capital: </span><span className="infoValue">{capital}</span></p>
            </section>
        </div>
    );
}
export default Country;