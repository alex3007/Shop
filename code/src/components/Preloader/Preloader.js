import React from 'react';
import preloader from "../../assets/preloaders/oval.svg";

let Preloader = (props) => {
    return <div style={
        {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            zIndex: '10',
        }}>
        <img style={{
            margin: 'auto',
            transform: 'scale(1.5)',
        }} src={preloader}/>
    </div>
};

export default Preloader;