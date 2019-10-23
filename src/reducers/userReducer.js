import { ADD_USER_DETAILS } from '../actions/type';

const initialState = {
    details: []
};

export default function (state = initialState, action) {
    switch (action.type) {
       case ADD_USER_DETAILS:
           return {
               ...state,
               details: [...state.details, action.payload]
           }
        default:
            return state;
    }
}