import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class HomeContent extends React.Component{
    render() {
        return (
            <Jumbotron id="jumbotron" style={{backgroundColor:"transparent", textAlign:"center"}}>
                    <h1>智慧生產實驗室</h1>
                    <h2>Smart Production Laboratory</h2>
                    <br/><br/>
                    <h3>National Cheng Kung University </h3>
                    <h4>College of Electrical Engineering &#38; Computer Science</h4>
                    <h5>lsInstitute of Manufacturing Information and Systems</h5>
                    <h6>
                        Department of Computer Science and Information Engineering
                    </h6>
                </Jumbotron>
);
    }
}

export default HomeContent;
