import React from 'react';
import preloader from "../../Assets/preloaders/oval.svg";

let Preloader = (props) => {
    return <div style={
        {
            width: '100%',
            height: '100px',
            position: 'absolute',
            display: 'flex',
        }}>
        <img style={{margin: 'auto'}} src={preloader}/>
    </div>
};

export default Preloader;