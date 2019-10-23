import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button } from 'antd';
import { DatePicker } from 'antd';
import  "react-datepicker/dist/react-datepicker.css";


class UserForm extends Component {

    state = {
          fname: '',
          lname: '',
          hobby: '',
          age: '',
          dob: ''
    }
    
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.state = values
        this.props.addForm(this.state);
        this.setState({fname: '', lname: '',  hobby: '', age: '',  dob: '' });
      }
    });
  };

  

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div >
      <Form onSubmit={this.handleSubmit} className="user-form" style={{display: 'inline-block'}}>
        <Form.Item>
          {getFieldDecorator('fname', {
            rules: [{ required: true, message: 'Please input your First Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name" 
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lname', {
            rules: [{ required: true, message: 'Please input your Last Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name" 
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input Age!' }],
          })(
            <Input
              prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Age" 
            />,
          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('dob', {
            rules: [{ required: true, message: 'Please input your Date of Birth!' }],
          })(
        <DatePicker size="large" onChange={this.handleChange} selected={this.state.dob} placeholder="Date of Birth"/>
        )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your Hobby!' }],
          })(
            <Input
              prefix={<Icon type="like" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Hobby" 
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
      
      </div>
      
    );
  }
}



const WrappedUserForm = Form.create({ name: 'user-form' })(UserForm);

ReactDOM.render(<WrappedUserForm />, document.getElementById('root'));

export default WrappedUserForm