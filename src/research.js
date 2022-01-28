import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Divider, Grid, Image, Segment} from 'semantic-ui-react'
import './styles/research.css'
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
                    "text" : "我們透過收集生產過程中批貨於各站點的生產資料，進行資料篩選、遺漏值處理與資料分類等資料探勘的技術後建立良率預測模型，以分析影響批貨最終良率的因子，提升製造業生產線的良率。"
                },
                "Scheduling" : {
                    "title" : "Scheduling 排程",
                    "text" : "隨著半導體製程隨著科技發展愈趨繁複，我們開發高效率的演算法解決製造業瓶頸產線排程問題，同時考量製程繁雜的生產限制，並在短時間內得到滿意解或是最佳解。"
                }
            }   
        }
        console.log(this.state)
    }
    render(){
    
        if(this.state.width > 500){
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
                            
                            <Description img={DataminingImg} title={this.state.research["Data Mining"]["title"]} text={this.state.research["Data Mining"]["text"]} small={true}/>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Description img={SchdeulingImg} title={this.state.research["Scheduling"]["title"]} text={this.state.research["Scheduling"]["text"]} className="horizontalImg" small={true}/>
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
