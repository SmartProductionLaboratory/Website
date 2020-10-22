import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { List } from 'semantic-ui-react'
import ListGroup from 'react-bootstrap/ListGroup'


import "./experience.css"



class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.outerWidth,
            height: window.outerHeight,
            researchExp : [`德國哈根大學 博士後研究員2017`, `國立清華大學 工業工程與管理博士班2016`,`國立清華大學 工業工程與管理碩士班2010`,`國立交通大學 工業工程與管理學系2008`],
            workExp : [`國立成功大學製造資訊與系統研究所助理教授2020`,`逢甲大學工業工程與管理學系助理教授 2018`, `裕隆汽車製造股份有限公司工業工程師 2012`, `台灣積體電路製造股份有限公司製造部課長 2011`]
        }
    }

    render(){
        if(this.state.width < 800){
            return (
                <Container className="experience">
                    <Row>
                        <Col>
                            <div class="studyExp">
                                <h2 className="ExpTitle">經歷</h2>
                            </div>

                            <ListGroup variant="flush">
                                {this.state.workExp.map((value, index)=>{
                                    return <ListGroup.Item>{value}</ListGroup.Item>
                                })}
                                {this.state.researchExp.map((value, index)=>{
                                    return <ListGroup.Item>{value}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <h2 className="ExpTitle">工作經歷</h2>
                            <ListGroup variant="flush">
                                {this.state.workExp.map((value, index)=>{
                                    return <ListGroup.Item>{value}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </Col>
                    </Row> */}
                </Container>
            );
        }else{
            return (
                <Container className="experience">
                    <Row>
                        <Col>
                            <div class="studyExp">
                                <h2 className="studyExpTitle">學歷</h2>
                                <List bulleted>
                                    {this.state.researchExp.map((value, index)=>{
                                        return <List.Item>{value}</List.Item>
                                    })}
                                </List>
                            </div>
                        </Col>
                        <Col>
                            <h2>工作經歷</h2>
                            <List bulleted>
                                {this.state.workExp.map((value, index)=>{
                                    return <List.Item>{value}</List.Item>
                                })}
                            </List>
                        </Col>
                    </Row>
                </Container>
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

export default Experience;