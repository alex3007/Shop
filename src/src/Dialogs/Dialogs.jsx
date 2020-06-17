import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div>
            <h3> Message</h3>
            <div><textarea value={newMessageBody}
                           onChange={onNewMessageChange}
                           placeholder='Enter your message'
                           className={cls.textArea}>
                </textarea>
                <button onClick={onSendMessageClick}
                        className={cls.buttonAddPost}>Send
                </button>
            </div>
            <div className={cls.dialogs}>
                <div className={cls.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={cls.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;


