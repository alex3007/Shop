import React from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import myphoto from '../../Assets/images/myphoto.jpg';
import titlephoto from '../../Assets/images/titlephoto.jpg';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={cls.content}>
            <div className={cls.image_container}>
                <img className={cls.content_image} src={titlephoto}/>
            </div>
            <div className={cls.description}>
                <img src={myphoto}/>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;