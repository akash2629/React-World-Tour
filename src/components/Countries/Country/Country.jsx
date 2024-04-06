/* eslint-disable react/prop-types */

// import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Country.css';


const Country = ({ country,handleVisitedCountry,handleVisitedFlags }) => {
    console.log(country)

    // eslint-disable-next-line react/prop-types
    const { name, flags, population,area,cca3 } = country;


    const [visited,setVisited] = useState(false);


    const handleVisited = () =>{
      setVisited(!visited);
    }
    console.log(handleVisitedCountry) 
    return (
        <div className={`country ${visited ? 'visited' :'non-visited'}` }>
            <h2 style={{color: visited ? 'white' :'red'}}>name :{name?.common}</h2>
            <img src={flags.png} alt="Country Image" />
            <h4>Population:{population}</h4>
            <h5>Area :{area}</h5>
            <p>Code :{cca3}</p>
            <button className='btn2' onClick={() =>handleVisitedCountry(country)} >Visited Count</button>
            <button className='btn2' onClick={() =>handleVisitedFlags(country.flags.png)} >Add Flag</button>
            <br />
            <button className='btn' onClick={handleVisited}>{visited ? 'visited' :'Going'}</button>
            <br />
            {/* {visited ? 'I have visited this country' :'I want visit this country'} */}
            {visited && 'I have visited this country.'}

        </div>
    );
};

Country.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string,
        }),
        flags: PropTypes.shape({
            png: PropTypes.string,
        }),
        population: PropTypes.number,
    }),
};

export default Country;
