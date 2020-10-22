import React from 'react';
import './ProfessorImg.css'
import ProImg from './imgs/121112589_3501074339951561_6230830862392965608_n.jpg'
import ProImg2 from './imgs/teacher91.jpg'
import Professor from './Professor';
import { Image } from 'semantic-ui-react'


class ProfessorImg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.outerWidth,
            height : window.outerHeight
        }
    }

    render(){
        var img;
        console.log(this.state)
        if(this.state.width < 800){
            img = ProImg2
        }else{
            img = ProImg
        }
        return (
            <>
                {/* <div className="proPhoto"> */}
                <Image id="photo" src={img} size="small"></Image>
                {/* </div> */}
                <div className="proName">
                    <p>王宏鍇 博士</p>
                    <p>Prof. Hung-Kai Wang</p>
                </div>
            </>
        );
    }

    updateDimensions = ()=>{
        this.setState({width: window.outerWidth, height: window.outereight})
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions);
    }
}

export default ProfessorImg;