import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import axios from 'axios';

import '../App.css';

class Navbar extends Component {
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

  render(){
    return (
        <Menu theme="light" mode="horizontal" className='navbar'>
            <Menu.Item className='logo'> <img src={this.state.logo} />  </Menu.Item>
            <Menu.Item> <Link to='/'> Services </Link> </Menu.Item>
            <Menu.Item> <Link to='/reviews'> Reviews </Link> </Menu.Item>
            <Menu.Item> <Link to='/login'> Login </Link> </Menu.Item>
        </Menu>
    );
  }  
}

export default Navbar;
