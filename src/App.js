import React, { Component } from 'react'
import UserTable from './components/UserTable'
import UserForm from './components/UserForm'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  state = {
    details: []
  }

  //Add User Details to Table
  addForm = detail => {
    this.setState({details: [...this.state.details, detail]});
  }


  render() {
    const { details } = this.state;
    return (
       <div className="App" style={{textAlign: 'center', display: 'inlineBlock', position: 'relative'}}>
        <h1>Joseph Godwin - Enye </h1>
      <UserTable userDetails={details} />
      <br></br><br></br><br></br>
        <UserForm addForm={this.addForm}/>
      </div>
    )
  }
}

export default App
