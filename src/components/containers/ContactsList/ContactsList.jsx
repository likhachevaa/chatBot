import React, { Component } from 'react';
import './style.scss';
import Modal from "@components/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadContacts, addContacts } from "@actions/contacts";

class ContactsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const userId = this.props.user.userId;
        this.props.loadContacts({ userId });
    }

    render() {
        return <div className="contacts-list">
            <Modal contacts={this.props.contacts} addChat={this.props.add} />
        </div>;
    }
}

const mapState = ({ contactsReducer }) => ({
    contacts: contactsReducer.contacts
});

const mapAction = dispatch => bindActionCreators({ loadContacts, addContacts }, dispatch);

export default connect(mapState, mapAction)(ContactsList);