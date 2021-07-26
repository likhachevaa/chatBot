import React, { Component } from 'react';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import './style.scss';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadUser } from '@actions/user';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }

    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        let isUsernameLoad = !!this.props.user.userId;

        return <div className="home">
            <Header chatId={this.props.chatId} />
            <div className="home__chats">
                {isUsernameLoad && <ChatsList user={this.props.user} />}
                {isUsernameLoad && <MessageList user={this.props.user} chatId={this.props.chatId} />}
            </div>
        </div>;
    }
}

const mapState = ({ userReducer }) => ({
    user: userReducer.user
});

const mapAction = dispatch => bindActionCreators({ loadUser }, dispatch);

export default connect(mapState, mapAction)(Home);