import { update } from './actions/userAction';
import { put, take, fork, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {database} from './firebase';
import axios from 'axios';


 export function* handleRequest(details) {
  yield call (axios.post('https://us-central1-joseph-enye.cloudfunctions.net/addmessage', details)
   .then(res => {
       // here will be code
   })
   .catch(error => {
       console.log(error);
   }));   
   
 };



function* startListener() {
  
  const channel = new eventChannel(emiter => {
    const listener = database.ref("users").on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });


    return () => {
      listener.off();
    };
  });


  while (true) {
    const { data } = yield take(channel);
    yield put(update(data));
  }
}

export default function* root() {
  yield fork(startListener);
  yield fork(handleRequest);
}
