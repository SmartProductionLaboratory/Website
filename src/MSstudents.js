import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Divider } from 'semantic-ui-react'
import './styles/MSstudents.css'
import jrimg from './imgs/zrl.png'
import effyimg from './imgs/effy.png'
import wadeimg from './imgs/wade.png'
import phoneimg from './imgs/phone.png'
import lianimg from './imgs/lian.png'
import annieimg from './imgs/annie.png'
import tiffanyimg from './imgs/tiffany.png'
import gcimg from './imgs/jc.png'
import pgimg from './imgs/pg.png'
import nckuimg from './imgs/NCKU.png'
import Student from './student'

class MSstudents extends React.Component{
    constructor(props){
        super(props);

        let students = [ 
                {img : jrimg, name : "梁哲榕", engName: ""},
                {img : pgimg, name : "李沛倚", engName: ""},
                {img : gcimg, name : "游智翔", engName: ""},
                {img : wadeimg, name : "黃偉哲", engName: ""},

                {img : annieimg, name : "王雅函", engName: ""},
		{img : effyimg, name : "李雅婷", engName: ""},
                {img : tiffanyimg, name : "唐嘉謙", engName: ""},
                {img : lianimg, name : "何立安", engName: ""},
                {img : phoneimg, name : "陳藝丰", engName: ""},
                
            ];

        
        this.state = {
            students : students
        }
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

export default MSstudents;
