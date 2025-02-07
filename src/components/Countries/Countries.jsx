import { useEffect, useState } from 'react';
import './Countries.css';
import Country from './Country/Country';



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = country => {
        console.log('add this to your cisited country')
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags = flag => {
        console.log('flag adding')
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div >
            <h1>Countris :{countries.length}</h1>

            {/* visited country */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common} </li>)
                    }
                </ol>

            </div>
            <div className='flag-container'>
                {
                    // visitedFlags.map(flag => <img src={flag}></img>)
                    visitedFlags.map((flag ,index)=> <img key={index} src={flag}></img>)
                }
            </div>

            {/* display countries */}
            <div className='country-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}>

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;