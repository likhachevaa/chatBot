import React, { Component } from 'react';
import './style.scss';
import ContactsList from "@containers/ContactsList";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import { push } from 'connected-react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadChats, addChat } from "@actions/chats";

class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: '',
            isChatsLoad: false,
        };
    }

    addChat = (name, contactId) => {
        const check = this.props.chats.find((el) => el.contactId === contactId);
        if (!check) {
            const chatId = this.props.chats.length;
            const title = 'Chat with ' + name;
            this.props.addChat(title, chatId, contactId);
        }
    }

    getSelectedIndex(index) {
        return this.state.selectedIndex === index;
    }

    setSelectedIndex(index) {
        this.setState({
            selectedIndex: index,
        });
    }

    handleNavigate(chatId) {
        this.setSelectedIndex(chatId);
        this.props.push(`/chat/${chatId}`);
    }

    componentDidMount() {
        const userId = this.props.user.userId;
        this.props.loadChats({ userId });
    }

    render() {
        const chatsList = (
            <List>
                { this.props.chats.map((el) =>
                    <ListItem
                        button
                        key={el.chatId}
                        selected={this.getSelectedIndex(el.chatId)}
                        onClick={() => this.handleNavigate(el.chatId)} >
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary={el.title} />
                    </ListItem>
                )}
            </List>
        );

        return <div className="chats-list">
            {chatsList}
            <ContactsList user={this.props.user} add={this.addChat} />
        </div>;
    }
}

const mapState = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapAction = dispatch => bindActionCreators({ loadChats, addChat, push }, dispatch);

export default connect(mapState, mapAction)(ChatsList);

