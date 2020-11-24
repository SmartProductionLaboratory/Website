import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Image} from 'semantic-ui-react'
import "./description.css"

class Description extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.small){
            return (
                <>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <Image className="icon" src={this.props.img} size='tiny' wrapped/>
                                <figcaption>{this.props.title}</figcaption>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col><p className="description_text">{this.props.text}</p></Col>
                        </Row>
                    </Container>
                </Col>
     
                </>
            );
        }else{
            return (
            <>
                <Col>
                    <Image className="icon" src={this.props.img} size='tiny' wrapped/>
                    <figcaption>{this.props.title}</figcaption>
                </Col>
                <Col><p className="description_text">{this.props.text}</p></Col>
            </>
            );
        }
        
    }
}

export default Description;