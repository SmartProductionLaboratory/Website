import React from 'react';
import Nvbar from './Nvbar';
import './styles/HomeContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Background from './imgs/DSC00094.png'
import Research from './research.js'
import HomeContent from './HomeContent.js'

class Home extends React.Component{
    render(){
        return (
            <div id="Home" style={{backgroundImage:`url(${Background})`}}>
                <Nvbar />
                <HomeContent/>
                <Research />
            </div>
        ); 
    }
}

export default Home
