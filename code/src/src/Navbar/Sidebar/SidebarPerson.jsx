import React from 'react';
import cls from './SitebarPerson.module.css';
import friend from "../../Assets/images/friend.jpg";

const SidebarPerson = (props) => {

    return (

        <div className={cls.friendItem}>

            <img src={friend} alt="avatar" ></img>

            <br/> {props.friend}

         </div>
            );
}
export default SidebarPerson;