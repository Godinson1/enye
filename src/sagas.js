import { update_store } from './actions/userAction';
import { put, take, fork, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {database} from './firebase';
import axios from 'axios';


 export function* handleAsyncRequest({ payload }) {
   //console.log(payload);
  yield  axios.post('https://us-central1-joseph-enye.cloudfunctions.net/addmessage', payload)
  .then(res => {
      // here will be code
  })
  .catch(error => {
      console.log(error);
  });   
 };


 export function* watchIncomingAction() {
  yield takeLatest('UPDATED', handleAsyncRequest);
 }


function* startListener() {
  
  const channel = new eventChannel(emiter => {
    const listener = database.ref("messages").on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });


    return () => {
      listener.off();
    };
  });


  while (true) {
    const { data } = yield take(channel);
    yield put(update_store(data));
  }
}

export default function* root() {
  yield fork(watchIncomingAction);
  yield fork(startListener);
}
