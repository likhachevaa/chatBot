import React from 'react';
import './style.scss';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default props => {
    const messages = props.messages;
    const chatId = props.chatId;

    return (
    <List className='message__wrap'>
        { messages.filter(el => el.chatId === chatId)
            .map((el, i) =>
                <ListItem key={ 'msgID' + i } className={ 'message ' + el.style }>
                    <ListItemText
                        ref={ props.lastMessage }
                        primary={ el.text }
                        secondary={ el.name }
                    />
                </ListItem>
        )}
    </List>
    );
}