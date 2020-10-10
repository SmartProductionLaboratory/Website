import React from 'react';
import Container from 'react-bootstrap/Container'
import ProfessorImg from './Professor_img'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Professor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResearchInfo from './ProfessorInfo'
import { Icon, Divider } from 'semantic-ui-react'


class Professor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.outerWidth,
            height : window.outerHeight
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
                <>
                    <Container className="Professor" id="advisor">
                        <Row>
                            <Col>
                                <ProfessorImg className="ImgBlock"/>
                            </Col>
                            <Col className="com-info">
                                <div className="info-item">
                                    <label><Icon name='phone' /></label>
                                    <span>06-2757575 ext 34220</span>
                                </div>
                                <div className="info-item">
                                    <label><Icon name='mail' /></label>
                                    <span>hkwang@gs.ncku.edu.tw</span>
                                </div>
                                <div className="info-item">
                                    <label><Icon name="location arrow"/></label>
                                    <span>701台南市東區大學路1號自強校區儀器設備大樓95602</span>
                                </div>
                                <ResearchInfo/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Divider/>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }else{
            return(
                <Container className="Professor" id="advisor">
                    <Row>
                        <Col>
                            <ProfessorImg className="ImgBlock"/>
                        </Col>
                        <Col className="com-info">
                            <div className="info-item">
                                <label><Icon name='phone' /></label>
                                <span>06-2757575 ext 34220</span>
                            </div>
                            <div className="info-item">
                                <label><Icon name='mail' /></label>
                                <span>hkwang@gs.ncku.edu.tw</span>
                            </div>
                            <div className="info-item">
                                <label><Icon name="location arrow"/></label>
                                <span>701台南市東區大學路1號自強校區儀器設備大樓95602</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <ResearchInfo/>
                    </Row>
                    <Row>
                        <Col>
                            <Divider/>
                        </Col>
                    </Row>
                </Container>
            );
        }
        
    }
}

export default Professor;