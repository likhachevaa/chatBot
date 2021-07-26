import { RSAA, getJSON } from 'redux-api-middleware';

export const loadUser = () => ({
    [RSAA]: {
        endpoint: '/api/me/',
        method: 'GET',
        types: [
            "LOAD_USER_REQUEST",
            {
                type: "LOAD_USER_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return { data: JSON.parse(res) }; // reducer : action.payload.data
                },
            },
            "LOAD_USER_FAILURE"
        ]
    }

});