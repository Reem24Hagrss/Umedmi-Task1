import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../App.css';

const { Option } = Select;

class Signup extends Component {

  state = {
    socials : [],
    emailvalid : false,
    passwordvalid : false,
    formvalid : false,
  }
  
  componentDidMount =() =>{
    axios.get('js/data.json').then( res => { 
      this.setState({
        socials : res.data.Social
      })
    } );
  }

   // from validation
   handleChange = (e) =>{
    // email validate
    if(e.target.id == "normal_login_Email"){
      const email = e.target.value;
      const pattern = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
      const result = pattern.test(email)
      if(result === true){
        this.setState({
          emailvalid : true
        })
      }else{
        this.setState({
          emailvalid : false,
          formvalid : false
        })
      }
    }
    // password validate
    if(e.target.id == "normal_login_password"){
      if(e.target.value.length >= 6){
        this.setState({
          passwordvalid : true
        })
      }else{
        this.setState({
          passwordvalid : false,
          formvalid : false
        })        
      }
    }
    // form validate
    if(this.state.emailvalid && this.state.passwordvalid){
      this.setState({
        formvalid : true
      })
    }
  }


  onFinishing = (values) => {
    console.log('Received values of form: ', values);
  };

  render(){
    const {socials} = this.state;
    const socialList = socials.map( (socialItem) =>{
      return(
        <a href='' key={socialItem.id}> 
            <img src={socialItem.social} alt="social" />  
        </a> 
      )
      
    } )
    return (
      <div className='login'>
          <Form className=' login-form' name="normal_login" initialValues={{ remember: true }} onFinish={this.onFinishing}>
            <Form.Item name="userrole" rules={[{ required: true, message: 'Please input your role!' }]}>
              <Select
                className='selection'
                placeholder="Select user role "
                allowClear
              >
                <Option value="doctor">Doctor</Option>
                <Option value="patient">Patient</Option>
                <Option value="assistant">Assistant</Option>
                <Option value="pharmacy">Pharmacy</Option>
                <Option value="lab">Lab</Option>
              </Select>
            </Form.Item>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your UserName" />
              </Form.Item>
              <Form.Item name="Email" rules={[{ required: true, message: 'Please input your Email!' }]} >
                  <Input id='email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your Email" onChange={(e)=>{this.handleChange(e)}} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                  <Input.Password id='password' prefix={<LockOutlined className="site-form-item-icon" />} type='password' placeholder="Enter your Password" onChange={(e)=>{this.handleChange(e)}} />
              </Form.Item>
              <Form.Item>
              {
                  this.state.formvalid == true ?
                  <Button htmlType="submit" shape="round" className="login-form-button">
                    Log in
                  </Button>
                  :
                  <Button htmlType="submit" shape="round" disabled className="login-form-button">
                    Log in
                  </Button>
                }
              </Form.Item>              
          </Form>
          <div class="login-form-social">
            <h3> Or, Sign up with </h3>
            <div className='social'>     
                     {socialList}
            </div>
          </div>
      </div>
    );
  }  
}

export default Signup;
