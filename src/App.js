import React from 'react';
import './App.css';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import {Provider} from 'react-redux';
import store  from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>JOSEPH'S FIREBASE FUNCTIONS - ENYE</h1>
      <UserTable />
      <hr />
      <UserForm />
    </div>
    </Provider>
  );
}

export default App;
