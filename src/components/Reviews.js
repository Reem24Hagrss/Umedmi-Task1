import React, { Component } from 'react';
import {Carousel , Avatar , Row , Col , Rate} from 'antd';
import axios from 'axios';
import '../App.css';


class Reviews extends Component {
  state = {
    Reviews : []
  }
  
  componentDidMount =() =>{
    axios.get('js/data.json').then( res => { 
      this.setState({
        Reviews : res.data.Reviews
      })
    } );
  }
  render(){
    const {Reviews} = this.state;
    const ReviewsList = Reviews.map( (item) =>{
      return(
        <div key={item.id}> 
          <Row>
            <Col span={3}>
                <Avatar src={item.image} size={64} className='' />
            </Col>
            <Col span={12}>
              <div className='detail'>
                <h2> {item.name} </h2>
                <h3> {item.service} </h3>
              </div>              
            </Col>
            <Col span='6'>
              <Rate disabled defaultValue={item.rate} />
            </Col>
          </Row>
          <Row>
          <Col span={3}>
          </Col>
          <Col span={15}>
            <p> {item.comment} </p>
          </Col>            
          </Row> 
        </div> 
      )
      
    } )
    return (
      <div className='reviews'>
        <h1> Reviews </h1>
        <div className='container'>
            <Carousel autoplay dotPosition='top' afterChange={this.onchange}>
                { ReviewsList }
            </Carousel>   
        </div>              
      </div>
    );
  }  
}

export default Reviews;
