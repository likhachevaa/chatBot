import { RSAA, getJSON } from 'redux-api-middleware';

export const loadContacts = (user) => ({
    [RSAA]: {
        endpoint: '/api/contacts/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(user),
        types: [
            "LOAD_CONTACTS_REQUEST",
            {
                type: "LOAD_CONTACTS_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return { data: JSON.parse(res) }; // reducer : action.payload.data
                },
            },
            "LOAD_CONTACTS_FAILURE",
        ]
    }
});

export const addContacts = () => ({

});