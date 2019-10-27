import {  UPDATED } from './type';

export const update = data => ({
    type: UPDATED,
    payload: {data}
});
