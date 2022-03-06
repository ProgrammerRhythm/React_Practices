import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const {common} = useParams();
    const [value, setValue] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${common}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setValue(data))
    }, []);
    // console.log(common);
    const nd = value[0];
    const style = {
        textAlign: 'center',
        marginTop: '190px',
    }
    return ( 
        <div style={style}>
            <img src={nd.flags.png} alt="" />
           <h2>Name :  {nd.name.common}</h2>
           <p><big>Region : {nd.region}</big></p>
           <p><big>Population : {nd.population}</big></p>
           <p><big>Capital : {nd.capital}</big></p>
           <p><big>Area : {nd.area}</big></p>

        </div>
    );
};

export default About;