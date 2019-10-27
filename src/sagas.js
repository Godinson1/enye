import { update } from './actions/userAction';
import { put, take, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {database} from './firebase';



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
}
