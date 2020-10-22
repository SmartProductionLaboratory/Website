import React from 'react';
import './ProfessorImg.css'
import ProImg from './imgs/121112589_3501074339951561_6230830862392965608_n.jpg'
import Professor from './Professor';
import { Image } from 'semantic-ui-react'


class ProfessorImg extends React.Component{
    render(){
        return (
            <>
                {/* <div className="proPhoto"> */}
                <Image id="photo" src={ProImg} size="small"></Image>
                {/* </div> */}
                <div className="proName">
                    <p>王宏鍇 博士</p>
                    <p>Prof. Hung-Kai Wang</p>
                </div>
            </>
        );
    }
}

export default ProfessorImg;