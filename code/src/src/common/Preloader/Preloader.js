import React from 'react';
import preloader from "../../Assets/preloaders/oval.svg";

let Preloader = (props) => {
    return <div  style={ {display: 'flex', height:'200px',width:'100%'} }>
        <img style={ {margin: 'auto'} } src={preloader} />
    </div>
};

export default Preloader;