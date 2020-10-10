import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Divider } from 'semantic-ui-react'
import './MSstudents.css'
import testAvatar from './imgs/DSC00098.png'
import Student from './student'

class MSstudents extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<>
            <Container id="MasterStudents" className="students">
                <Row>
                    <Col>
                        <Divider horizontal><h3>Master Students</h3></Divider>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Student img={testAvatar} name={"林友鈞"} engName={"Eugene"}/>
                    </Col>
                    <Col>
                        <Student img={testAvatar} name={"林友鈞"} engName={"Eugene"}/>
                    </Col>
                </Row>
            </Container>
        </>);
    }
}

export default MSstudents;