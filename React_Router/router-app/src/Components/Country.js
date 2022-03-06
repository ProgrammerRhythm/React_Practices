import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Country = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    })
    return (
        <div>
            {
                country.map(v => <Show value={v}></Show>)
            }
        </div>
    );
    function Show(props){
        const style = {
            border: '1px solid black',
            margin: '30px',
            padding: '20px',
            textAlign: 'center'
        }
       
        return (
            <div style={style}>
                <img src={props.value.flags.png} alt="" />
                <h1>{props.value.name.common}</h1>
                <Link to={`about/${props.value.name.common}`}><button>More</button></Link>
            </div>
        )
    }
};

export default Country;