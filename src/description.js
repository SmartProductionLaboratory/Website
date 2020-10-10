import React from 'react'
import Col from 'react-bootstrap/Col'
import {Image} from 'semantic-ui-react'

class Description extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let col;
        if(this.props.divider){
            col = <Col className="mid"><p className="description_text">{this.props.text}</p></Col>;
        }else{
            col = <Col><p className="description_text">{this.props.text}</p></Col>
        }
        return (
            <>
            <Col>
                <div>
                    <Image className="icon" src={this.props.img} size='tiny' wrapped/>
                    <figcaption>{this.props.title}</figcaption>
                </div>
            </Col>
            {col}
            </>
        );
    }
}

export default Description;