import React from 'react';
import './style.scss';
import { connect } from "react-redux";

function Header(props) {
    return <div className="header">
        <h1>MyMessenger { isFinite(props.chatId) && ('- ' + props.chats[props.chatId].title) }</h1>
    </div>;
}

const mapState = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

export default connect(mapState, null)(Header);