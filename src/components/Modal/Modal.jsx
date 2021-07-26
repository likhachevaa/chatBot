import React from 'react';
import './style.scss';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function SimpleModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (el, i) => {
        props.addChat(el.name, el.contactId);
        handleClose();
    }

    const usersList = (
        <List>
            { props.contacts.map((el, i) =>
                <ListItem
                    button
                    key={i}
                    onClick={() => handleListItemClick(el, i)}
                >
                    <ListItemAvatar>
                        <Avatar alt={el.name} src={el.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={el.name} />
                </ListItem>
            )}
        </List>
    );

    return (
        <div className="modal__wrap">
            <button type="button" onClick={handleOpen}>
                Contact List
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="modal">
                    <h2>Contact List</h2>
                    <div>
                        {usersList}
                    </div>
                </div>
            </Modal>
        </div>
    );
}