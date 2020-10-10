import React from 'react';
import Nvbar from './Nvbar';
import './HomeContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Background from './imgs/DSC00094.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Research from './research.js'

class Home extends React.Component{
    render(){
        return (
            <div id="Home" style={{backgroundImage:`url(${Background})`}}>
                <Nvbar />
                <Jumbotron id="jumbotron" style={{backgroundColor:"transparent", textAlign:"center"}}>
                    <h1>智慧生產實驗室</h1>
                    <h2>Smart Production Laboratory</h2>
                    <br/><br/>
                    <h4>National Cheng Kung University</h4>
                    <p>
                    Department of Computer Science and Infromation Engineering
                    </p>
                </Jumbotron>
                <Research />
            </div>
        ); 
    }
}

export default Home