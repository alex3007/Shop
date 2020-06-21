import React from 'react';
import cls from './Description.module.css';


const Description = (props) => {
    return (
        <div>
            {props.name}
            {props.description}
        </div>

    )
};

export default Description;
