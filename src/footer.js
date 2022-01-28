import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './styles/footer.css'
import reactLogo from './imgs/logo192.png'
import reactBootstreapLogo from './imgs/react-bootstrap.svg'


class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="footer">
                  <div id="poweredBy">
                        <h4>Powered By</h4>
                        <a href="https://reactjs.org/"><img src={reactLogo} width={40}></img></a>
                        <a href="https://github.com/react-bootstrap/react-bootstrap"><img src={reactBootstreapLogo} width={40}></img></a>
                  </div>  
                  <div id="copyright">
                      <span>Copyright © 2020 Smart Production Lab All rights reserved </span>
                  </div>
            </div>
        )
    }
}

export default Footer;
