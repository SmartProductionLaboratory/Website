import React from 'react'
import './styles/student.css'


class Student extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<>
            <div className="student">
                <img src={this.props.img} alt="Avatar" width={150}></img>
                <p className="name">{this.props.name}</p>
                <p>{this.props.engName}</p>
            </div>
        </>);
    }
}

export default Student;
