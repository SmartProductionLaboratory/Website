import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Divider } from 'semantic-ui-react'
import './styles/MSstudents.css'
import egimg from './imgs/eugene.png'
import Student from './student'

class UGstudents extends React.Component{
    constructor(props){
        super(props);
        let students = [
            { img:egimg, name:"林友鈞", engName:"" }
        ];
        this.state = {
            "students" : students
        }
    }

    render(){
        return (<>
            <Container id="UndergraduateStudent" className="students">
                <Row>
                    <Col>
                        <Divider horizontal><h3>Undergraduate</h3></Divider>
                    </Col>
                </Row>
                <Row>
                    {this.state.students.map((value, index)=>{
                        return <Col>
                                <Student img={value.img} name={value.name} engName={value.engName}/>
                            </Col>
                    })}
                </Row>
            </Container>
        </>);
    }
}

export default UGstudents;
