import { UPDATED } from '../actions/type.js';

const initialState = {
    details: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATED:
            return {
                ...state,
                details: [...state.details, action.payload]
            }

        default:
            return state;
    }
};

