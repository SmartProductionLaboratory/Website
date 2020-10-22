import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Divider, Grid, Image, Segment} from 'semantic-ui-react'
import './research.css'
import DataminingImg from './imgs/data-mining.svg'
import SchdeulingImg from './imgs/scheduling.png'
import Description from './description'
import 'bootstrap/dist/css/bootstrap.min.css';

class research extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.outerWidth,
            height: window.outerHeight,
            research :{
                "Data Mining" : {
                    "title" : "Data Mining 資料探勘",
                    "text" : "Data mining is a process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems. We use data mining technique to improve efficiency of manufacturing processes"
                },
                "Scheduling" : {
                    "title" : "Scheduling 排程",
                    "text" : "Scheduling is the process of arranging, controlling and optimizing work and workloads in a production process or manufacturing process."
                }
            }   
        }
        console.log(this.state)
    }
    render(){
    
        if(this.state.width < 800){
            return (
                <div className="wbackground">
                    <Container id="research" fluid={true}>
                        <Row id="researchTitle">
                            <Col>
                                <h1>Research</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Description img={DataminingImg} title={this.state.research["Data Mining"]["title"]} text={this.state.research["Data Mining"]["text"]}/>
                        </Row>
                        <br/><br/><br/>
                        <Row>
                            <Description img={SchdeulingImg} title={this.state.research["Scheduling"]["title"]} text={this.state.research["Scheduling"]["text"]}/>
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
                            
                            <Description img={DataminingImg} title={this.state.research["Data Mining"]["title"]} text={this.state.research["Data Mining"]["text"]} divider={true}/>
                            <Description img={SchdeulingImg} title={this.state.research["Scheduling"]["title"]} text={this.state.research["Scheduling"]["text"]} className="horizontalImg" />
                            
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