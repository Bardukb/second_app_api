import "./CountryInfo.css";
import React from "react";

function CountryInfo({ country }) {
  return (
    <div className="country-info-box">
      <div className="flags">
        <img src={country.flags.png} alt={country.flags.alt}></img>
      </div>
      <div>
        <div className="name-country">{country.name.official}</div>
        <div className="info">
          <div>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Continets: {country.continents}</p>
          </div>
        </div>
        <div>
          <p className="border">
            Borders:{" "}
            {country.borders == undefined ? "-":country.borders.map((item) => `${item} `)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
