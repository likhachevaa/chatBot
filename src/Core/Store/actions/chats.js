import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = (user) => ({
    [RSAA]: {
        endpoint: '/api/chats/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(user),
        types: [
            "LOAD_CHATS_REQUEST",
            {
                type: "LOAD_CHATS_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return { data: JSON.parse(res) }; // reducer : action.payload.data
                },
            },
            {
                type: "LOAD_CHATS_FAILURE",
                meta: async (action, state, response) => {
                    const res = await getJSON(response);
                    if (res) {
                        return {
                            status: res.status,
                            statusText: res.statusText
                        };
                    } else {
                        return {
                            status: 'Network request failed'
                        }
                    }
                }
            }
        ]
    }
});

export const addChat = (title, chatId, contactId) => ({
    type: "ADD_CHAT",
    paramChat: { title, chatId, contactId },
});