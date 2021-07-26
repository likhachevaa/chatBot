import React, { Component } from 'react';
import './style.scss';
import Messages from '@components/Messages';
import MsgInput from '@components/MsgInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMessages, sendMessages } from '@actions/messages';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: false,
        };
        this.textInput = null;
        this.lastMsg = null;
    }

    sendMessage = (name, text) => {
        const userAnswer = (name === 'me');
        const style = userAnswer ? 'message__me' : 'message__other';
        const chatId = this.props.chatId;
        this.props.sendMessages(name, text, style, chatId);
        this.setState({
            userAnswer,
        });
    };

    componentDidMount() {
        const userId = this.props.user.userId;
        this.props.loadMessages({ userId });

        const elemInput = this.textInput.firstChild.firstChild;
        elemInput.focus();
    }

    render() {
        return (
            <div className="message-list">
                <div className="message-list__msg">
                    <Messages
                        lastMessage={el => this.lastMsg = el}
                        messages={this.props.messages}
                        chatId={this.props.chatId}
                    />
                </div>
                <div className="message-list__input">
                    <MsgInput
                        textInput={el => this.textInput = el}
                        sendMessage={this.sendMessage}
                    />
                </div>
            </div>
        );

    }

    componentDidUpdate() {
        if (this.lastMsg) {
            this.lastMsg.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            if (this.state.userAnswer) {
                this.sendMessage('bot', 'answer');
            }
        }, 500);
    }
}

const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapAction = dispatch => bindActionCreators({ loadMessages, sendMessages }, dispatch);

export default connect(mapState, mapAction)(MessageList);