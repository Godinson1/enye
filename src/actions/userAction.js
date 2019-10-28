import {  UPDATED, NEW_UPDATED } from './type';

export const update = data => ({
    type: UPDATED,
    payload: {data}
});


export const update_store = data => ({
    type: NEW_UPDATED,
    payload: {data}
});
