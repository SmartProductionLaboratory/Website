import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Divider } from 'semantic-ui-react'
import './MSstudents.css'
import egimg from './imgs/DSC00098.png'
import cyiimg from './imgs/741474.png'
import Student from './student'

class UGstudents extends React.Component{
    constructor(props){
        super(props);
        let students = [
            {
                "name" : "林友鈞",
                "eng_name" : "Eugene",
                "photo" : egimg
            }
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
                        <Divider horizontal><h3>Undergraduate Student</h3></Divider>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Student img={egimg} name={"林友鈞"} engName={""}/>
                    </Col>
					<Col>
						<Student img={cyiimg} name={"許湘苡"} engName={""}/>
					</Col>
                    {/* <Col>
                        <Student img={testAvatar} name={"林友鈞"} engName={"Eugene"}/>
                    </Col>
                    <Col>
                        <Student img={testAvatar} name={"林友鈞"} engName={"Eugene"}/>
                    </Col>
                    <Col>
                        <Student img={testAvatar} name={"林友鈞"} engName={"Eugene"}/>
                    </Col>
                    <Col>
                        <Student img={testAvatar} name={"林友鈞"} engName={"Eugene"}/>
                    </Col>                     */}
                </Row>
            </Container>
        </>);
    }
}

export default UGstudents;
