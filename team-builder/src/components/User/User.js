import React, { useState } from 'react';

const User = (props) => {
    console.log(props.handleAdded);
    const {email,picture,name,phone} = props.user;
    const [mobile,serModel] = useState('')
    const showMobile = () => serModel(phone);
    const nam = name.title+' ' + name.first+' ' + name.last;
    return (
        <div>
            <Show handleAdded={props.handleAdded}></Show>
        </div>
    );
    function Show(props){
        const style = {
            border: '2px solid black',
            padding: '40px',
            margin: '50px',
            borderRadius:'8px',
        }
        const btn = {
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            margin: '10px',
        }
        
        return (
            <div style={style}>
                <img src={picture.large} alt="" />
                <h2>Name: {name.title+' ' + name.first+' ' + name.last}</h2>
                <h5>Email: {email}</h5>
                <h5>Phone: {mobile}</h5>
                <button onClick={showMobile} style={btn}>Display Phone Number</button>
                <button onClick={() => props.handleAdded(nam)} style={btn}>Add Me</button>
            </div>
        )
    }
};

export default User;