import { ADD_USER_DETAILS } from './type';

export const addDetails = (values) => {
  return  {
        type: ADD_USER_DETAILS,
        payload: values
      }
    }