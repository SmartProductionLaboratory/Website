import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Divider, Grid, Image, Segment} from 'semantic-ui-react'
import './research.css'
import DataminingImg from './imgs/datamining.png'
import SchdeulingImg from './imgs/scheduling.png'
import Description from './description'
import 'bootstrap/dist/css/bootstrap.min.css';

class research extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.outerWidth,
            height: window.outerHeight
        }
        console.log(this.state)
    }
    render(){
    
        if(this.state.width < 550){
            return (
                <div className="wbackground">
                    <Container id="research" fluid={true}>
                        <Row id="researchTitle">
                            <Col>
                                <h1>Research</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Description img={DataminingImg} title={`Data Mining 資料探勘`} text={`Dataming is to .. BlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBla`}/>
                        </Row>
                        <br/><br/><br/>
                        <Row>
                            <Description img={SchdeulingImg} title={`Scheduling 排程`} text={`Scheduling is ...BlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBla`}/>
                        </Row>
                    </Container>
                </div>
            )
        }else{
            return (
                <div className="wbackground">
                    <Container id="research" fluid={true}>
                        <Row id="researchTitle">
                            <Col>
                                <h1>Research</h1>
                            </Col>
                        </Row>
                        <Row>
                            
                            <Description img={DataminingImg} title={"Data Mining 資料探勘"} text={`Data mining is  .. BlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla`} divider={true}/>
                            <Description img={SchdeulingImg} title={`Scheduling 排程`} text={`Scheduling is ...BlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBla`} className="horizontalImg" />
                            
                        </Row>
                    </Container>
                </div>
            );
        }
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

export default research;