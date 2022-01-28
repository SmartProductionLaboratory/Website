import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import LabPhoto1 from './imgs/labPhoto1.jpg'
import LabPhoto2 from './imgs/labPhoto2.jpg'
import LabPhoto3 from './imgs/labPhoto3.jpg'

import './styles/LabCarouse.css'

class LabCarousel extends React.Component{
  constructor(props){
    super(props);
    let items = [
        { title:"實驗室聚餐", src:LabPhoto1},
        { title:"實驗室聚餐", src:LabPhoto2},
        { title:"實驗室聚餐", src:LabPhoto3}
    ]

    this.state = {
        carousel_items : items 
    }
  }
    
  render(){
    return (
        <Carousel id="photos">
        {this.state.carousel_items.map((value, index)=>{
            return <Carousel.Item>
            <img
              className="d-block w-100"
              src={value.src}
              alt="slide"
            />
            <Carousel.Caption>
              <h3>{value.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        })}
        </Carousel>
      );
    }
}

export default LabCarousel;
