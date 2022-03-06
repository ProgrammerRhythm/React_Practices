import React from 'react';

const NotFound = () => { 
    const style = {
        textAlign: 'center',
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <h1>404 Not Found</h1>
        </div>
    );
};

export default NotFound;