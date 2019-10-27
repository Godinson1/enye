import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button } from 'antd';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { handleRequest } from '../sagas';




class UserForm extends Component {


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
         this.state = values
      if (!err) {
          const details = {
            fname: this.state.fname,
            lname: this.state.lname,
            hobby: this.state.hobby,
            dob: moment(this.state.dob).format('YYYY-MM-DD').toString(),
            age: this.state.age
          }
        this.props.handleRequest(details);
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
        <DatePicker size="large" onChange={this.handleChange}  placeholder="Date of Birth"/>
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

function mapDispatchToProps (dispatch) {
  bindActionCreators({handleRequest: handleRequest}, dispatch);
}


const WrappedUserForm = Form.create({ name: 'user-form' })(UserForm);

ReactDOM.render(<WrappedUserForm />, document.getElementById('root'));

export default connect(mapDispatchToProps, { handleRequest })(WrappedUserForm)
