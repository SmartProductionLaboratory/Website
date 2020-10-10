import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import LabPhoto1 from './imgs/labPhoto1.jpg'
import './LabCarouse.css'

class LabCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index : 0,
      
    }
  }
    
  render(){
    return (
        <Carousel id="photos">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LabPhoto1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>實驗室聚餐</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
}

export default LabCarousel;