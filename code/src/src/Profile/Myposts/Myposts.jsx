import React from 'react';
import cls from './Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {

    let postElements = props.posts
        .map( message => <Post message={message.message} likesCount={message.likesCount} />)

    let newPostElement  = React.createRef();

    let onAddPost =() =>{
        props.addPost();
          };
    let onPostChange =() =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (

        <div className={cls.postsBlock}><h3> My posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                          className={cls.textArea}></textarea>
                <button onClick={onAddPost} className={cls.buttonAddPost}>Add post</button>

            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}
export default Myposts;
