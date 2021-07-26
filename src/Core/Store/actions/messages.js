import { RSAA, getJSON } from 'redux-api-middleware';

export const loadMessages = (user) => ({
    [RSAA]: {
        endpoint: '/api/messages/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(user),
        types: [
            "LOAD_MESSAGES_REQUEST",
            {
                type: "LOAD_MESSAGES_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return { data: JSON.parse(res) };
                },
            },
            "LOAD_MESSAGES_FAILURE",
        ]
    }
});

export const sendMessages = (name, text, style, chatId) => ({
    type: 'SEND_MSG',
    paramMsg: { name, text, style, chatId },
});