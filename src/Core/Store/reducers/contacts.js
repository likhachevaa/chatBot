import update from 'react-addons-update';

const storeContacts = {
    contacts: [],
};

export default (store = storeContacts, action) => {
    switch (action.type) {
        case "LOAD_CONTACTS_SUCCESS": {
            return update(store, {
                contacts: { $set: action.payload.data }
            });
        }
        case 'ADD_CONTACTS': {
            // todo
            return store;
        }
        default: {
            return store;
        }
    }
};

