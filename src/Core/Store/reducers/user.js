import update from 'react-addons-update';

const storeUser = {
    user: {},
};

export default (store = storeUser, action) => {
    switch (action.type) {
        case "LOAD_USER_SUCCESS": {
            return update(store, {
                user: { $set: action.payload.data }
            });
        }
        default: {
            return store;
        }
    }
};