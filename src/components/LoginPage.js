import React, { Component } from 'react';
import {Layout , Tabs} from 'antd';

import Login from './Login';
import Signup from './Signup';

import axios from 'axios';
import '../App.css';
const { TabPane } = Tabs;

class LoginPage extends Component {
  state = {
    logo : ''
  }
  
  componentDidMount =() =>{
    axios.get('js/data.json').then( res => { 
      this.setState({
        logo : res.data.logo 
    }) 
    } );
  }
  callback = (key) => {
    console.log(key);
  }
  render(){
    return (
      <div className='loginpage'>
        <div className='logo'>
          <img src={this.state.logo}/>
        </div>
        <h1>Hello Friend</h1>        
        <Tabs className='tab' type='card' defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Login" key="1">
            <Login />
          </TabPane>
          <TabPane tab="Signup" key="2">
            <Signup />
          </TabPane>
        </Tabs>
      </div>
      
    );
  }  
}

export default LoginPage;
