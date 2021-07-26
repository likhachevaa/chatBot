import { sendMessages } from '@actions/messages';
import update from "react-addons-update";

export default store => next => action => {
    switch(action.type) {
        case 'SEND_MSG': {
            if (action.paramMsg.name === 'me') {
                setTimeout(() => {
                    const chatId = action.paramMsg.chatId;
                    return store.dispatch(sendMessages('botMD2', 'tram-pam-pam-pam', 'message__other', chatId));
                }, 500);
            }
        }
    }
    return next(action);
};