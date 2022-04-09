import React, { useState } from 'react';

const User = (props) => {
    const {email,picture,name,phone} = props.user;
    const [mobile,setMobile] = useState([]);
    const showMobile = () => setMobile(phone);
    const nam = name.title+' ' + name.first+' ' + name.last;
    const styles = {
        textAlign: 'center',
        margin: '20px',
        padding: '40px',
        border: '1px solid black',
        borderRadius: '8px',
    }
    return (
        <div style={styles}>
            {/* <img src={props.user.picture.large} alt="" /> */}
            <h2>Name: {name.title+' ' + name.first+' ' + name.last}</h2>
            <p>Email : {email}</p>
            <img src={picture.large} alt="" />
            <p>Phone : {mobile}</p>
            <button onClick={showMobile}>Show Phone Number</button>
            <button onClick={() => props.handleAdded(nam)}>Add to team</button>
        </div>
    );
};

export default User;