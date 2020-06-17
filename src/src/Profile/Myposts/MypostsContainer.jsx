import React from 'react';
import Myposts from './Myposts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../.././Redux/profile-reducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{

    return {

        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () =>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) =>{
            let action = dispatch(updateNewPostTextActionCreator(text));
        dispatch(action);
        }
    }
}

const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);

export default MypostsContainer;
