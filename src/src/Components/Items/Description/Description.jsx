import React from 'react';
import cls from './Description.module.css';


const Description = (props) => {

    let descriptionId;
    let pathArray = props.soul.map(e => (e.path));
    let nameArray = props.soul.map(e => (e.name));
    let descriptionArray = props.soul.map(e => (e.description));
    let n = pathArray.length;
    for (let i = 0; i <= n; i++) {
        if (props.soulPath === pathArray[i]) {
            descriptionId = i
        }else{}
    }
    return (
        <div>
            <div className={cls.titleContainer}>
                <i onClick={() => {
                    props.history.goBack()
                }} className="fa fa-2x fa-times"></i>
                <h2 className={cls.title}>{nameArray[descriptionId]}</h2>
            </div>
            <div className={cls.textContainer}>
                {descriptionArray[descriptionId]}
            </div>
        </div>

    )
};

export default Description;
