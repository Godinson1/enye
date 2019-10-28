import { update } from './actions/userAction';
import { put, take, fork, call, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {database} from './firebase';
import axios from 'axios';


export function send() {
  axios.post('https://us-central1-joseph-enye.cloudfunctions.net/addmessage')
   .then(res => {
       // here will be code
   })
   .catch(error => {
       console.log(error);
   })
}

 export function* handleAsyncRequest({ payload }) {
  yield call (send, payload);   
   yield put({type: 'UPDATED ASYNC', payload})
 };


 export function* watchIncomingAction() {
  yield takeLatest('UPDATED', handleAsyncRequest);
 }


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
  yield fork(watchIncomingAction);
  yield fork(startListener);
}
