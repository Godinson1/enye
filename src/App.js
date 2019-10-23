import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Joseph Godwin - Enye</h1>
     <UserTable />
      <hr />
      <UserForm />
    </div>
    </Provider>
  );
}

export default App;
