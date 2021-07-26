import React from 'react';
import './style.scss';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

export default (props) => {
    const sendMessage = (inputText) => {
        props.sendMessage('me', inputText);
    };

    const handleKeyUp = (evt) => {
        if (evt.keyCode !== 13 || evt.target.value === '') return;
        sendMessage(evt.target.value);
        evt.target.value = '';
    };

    const handleClick = () => {
        let inputTarget = document.getElementById('msgInput');
        if (inputTarget.value === '') return;
        sendMessage(inputTarget.value);
        inputTarget.value = '';
    };

    return <div className="msg-input">
        <TextField
            ref={ props.textInput }
            id = "msgInput"
            type = "text"
            variant="filled"
            onKeyUp={ handleKeyUp }
        />

        <button onClick={ handleClick }>
            <SendIcon />
        </button>
    </div>;
};