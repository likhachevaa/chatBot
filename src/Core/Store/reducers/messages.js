import update from 'react-addons-update';

const storeMessages = {
    messages: [],
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case "LOAD_MESSAGES_SUCCESS": {
            return update(store, {
                messages: { $set: action.payload.data }
            });
        }
        case 'SEND_MSG': {
            return update(store, {
                messages: { $push: [action.paramMsg] }
            });
        }
        default: {
            return store;
        }
    }
};