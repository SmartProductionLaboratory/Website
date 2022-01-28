import React from 'react'
import { Icon } from 'semantic-ui-react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Divider, List } from 'semantic-ui-react'


import './styles/ResearchInterests.css'


class ResearchInterests extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.outerWidth,
            height : window.outerHeight,
            researchInfo : [
                "生產規劃與排程 Production planning and scheduling", 
                "資料挖礦與大數據分析 Data mining and big data analysis", 
                "萬用啟發式演算法 Metaheuristic algorithm", 
                "先進製程控制 Advanced process control", 
                "決策分析 Decision analysis",
                // "金門旅遊 Kinmen Tourism Guildline"
            ]
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

    render(){
        if(this.state.width > 800){
            return (
                <Container className="researchInfo">
                    <Row>
                        <Col className="researchTitle">
                            <h2>研究方向</h2>
                            <List bulleted>
                                {this.state.researchInfo.map((value, index)=>{
                                    return <List.Item className="item">{value}</List.Item>
                                })}
                            </List>
                        </Col>
                        
                    </Row>
                </Container>
            );
        }else{
            return (
            <>
                <Container className="researchInfo">
                    <Row>
                        <Col xs={5} className="researchTitle">
                            <h4>研究方向</h4>
                        </Col>
                        <Col xs={7}>
                            <ListGroup variant="flush">
                                {this.state.researchInfo.map((value, index)=>{
                                    return <ListGroup.Item>{value}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </>
            );
        }
        
    }
}

export default ResearchInterests;
