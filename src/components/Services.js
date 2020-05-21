import React, { Component } from 'react';
import {List , Avatar , Carousel} from 'antd';
import axios from 'axios';
import '../App.css';


class Services extends Component {
  state = {
    Servise : [],
    active : 1
  }
  
  componentDidMount =() =>{
    axios.get('js/data.json').then( res => { 
      this.setState({
        Servise : res.data.Servise
      })
    } );
  }

  onchange = (a, b ,c) =>{
    if(a >=0){
      this.setState({
        active : a+1
      })
    }
  }
  render(){
    const {Servise} = this.state;
    const ServiseList = Servise.map( (ServiseItem) =>{
      return(
        <div key={ServiseItem.id}> 
            <h3> {ServiseItem.name} </h3>
            <p> {ServiseItem.describe} </p>
        </div> 
      )
      
    } )

    return (
      <div className='service'>
          <h1> WHAT WE DO </h1>
          <h2> Our Services </h2>
          <p> We offer Electronic Medical Record Bundled services </p>
          {/* list Avatar */}
          <div className='container'>
              <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={this.state.Servise}
                  renderItem={item => (
                    this.state.active == item.id ? 
                    <List.Item className='activeitem'>
                    <List.Item.Meta
                      avatar={<Avatar src={item.icon} shape="square" size="large" />}
                    />
                  </List.Item>
                     : 
                    <List.Item >
                      <List.Item.Meta
                        avatar={<Avatar src={item.icon} shape="square" size="large" />}
                      />
                    </List.Item>
                  )}
              />
              <div className='details'>
                <Carousel autoplay dotPosition='top' afterChange={this.onchange}>
                    {ServiseList}
                </Carousel>
              </div>

          </div>
      </div>
    );
  }  
}

export default Services;
