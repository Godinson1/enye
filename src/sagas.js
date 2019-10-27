import { update } from './actions/userAction';
import { put, take, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {database} from './firebase';




function createEventChannel() {
    const listener = eventChannel(
        emit => {
            database.ref('users')
            .on('child_added', data => emit(data.val()));
return () => database.ref('users').off(listener);
        }
    );
    
    return listener;
};

function* updatedItemSaga() {
    const updateChannel = createEventChannel();
    while(true) {
        const data = yield take(updateChannel);
        yield put(update(data));
    }
}



export default function* rootSaga() {
    yield fork(updatedItemSaga);
}